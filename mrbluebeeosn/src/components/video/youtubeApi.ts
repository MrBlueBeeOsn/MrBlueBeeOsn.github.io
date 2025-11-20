// YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

import { Video, YouTubeSearchResponse, YouTubeVideoDetailsResponse } from './types';

const YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

export class YouTubeAPI {
  private static async makeRequest<T>(url: string): Promise<T> {
    try {
      const safeUrl = url.replace(YOUTUBE_API_KEY, 'API_KEY_HIDDEN');
      console.log('Making request to:', safeUrl);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response error:', response.status, errorText);
        
        if (response.status === 403) {
          throw new Error('API Key không hợp lệ hoặc chưa kích hoạt YouTube Data API v3');
        } else if (response.status === 400) {
          throw new Error('Request không hợp lệ. Kiểm tra các tham số API.');
        } else if (response.status === 429) {
          throw new Error('Đã vượt quá hạn mức API. Vui lòng thử lại sau.');
        } else {
          throw new Error(`Lỗi API: ${response.status}`);
        }
      }
      
      const data = await response.json();
      
      if (data.error) {
        console.error('API Error in response:', data.error);
        throw new Error(data.error.message || 'Lỗi từ YouTube API');
      }
      
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Không thể kết nối đến YouTube API');
    }
  }

  static async searchVideos(query: string, maxResults: number = 10): Promise<Video[]> {
    if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY.includes('YOUR_ACTUAL_YOUTUBE_API_KEY') || YOUTUBE_API_KEY.includes('AIzaSyCxxxxxxxx')) {
      throw new Error('API Key chưa được cấu hình. Vui lòng thay thế YOUTUBE_API_KEY trong file youtubeApi.ts');
    }

    try {
      // Tối ưu query tìm kiếm cho việc học tiếng Anh
      const searchQuery = this.optimizeSearchQuery(query);
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(searchQuery)}&type=video&videoCaption=closedCaption&relevanceLanguage=en&key=${YOUTUBE_API_KEY}`;
      
      console.log('Searching YouTube for optimized query:', searchQuery);
      const searchData: YouTubeSearchResponse = await this.makeRequest(searchUrl);
      
      if (!searchData.items || searchData.items.length === 0) {
        console.log('No videos found for query:', searchQuery);
        // Thử tìm kiếm với query gốc nếu không tìm thấy
        return await this.fallbackSearch(query, maxResults);
      }

      // Lấy thông tin chi tiết về video
      const videoIds = searchData.items.map(item => item.id.videoId).join(',');
      const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
      
      const detailsData: YouTubeVideoDetailsResponse = await this.makeRequest(detailsUrl);

      const videos: Video[] = searchData.items.map((item, index) => {
        const details = detailsData.items[index];
        // Tạo thời gian bắt đầu ngẫu nhiên (giả lập Youglish)
        const startTime = this.generateStartTime();
        
        return {
          videoId: item.id.videoId,
          title: this.cleanTitle(item.snippet.title),
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          duration: this.formatDuration(details?.contentDetails?.duration || 'PT0M0S'),
          publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString('vi-VN'),
          start: startTime,
          // Thêm thông tin về lượt xem để sắp xếp
          viewCount: parseInt(details?.statistics?.viewCount || '0')
        };
      });

      // Sắp xếp video theo lượt xem (video phổ biến hơn lên đầu)
      videos.sort((a, b) => b.viewCount - a.viewCount);

      console.log(`Found ${videos.length} videos`);
      return videos;
    } catch (error) {
      console.error('Error searching videos:', error);
      throw error;
    }
  }

  // Tối ưu query tìm kiếm cho việc học tiếng Anh
  private static optimizeSearchQuery(query: string): string {
    const englishLearningKeywords = [
      'pronunciation',
      'how to pronounce',
      'english lesson',
      'learn english',
      'speaking practice',
      'vocabulary',
      'english speaking'
    ];

    const basicQuery = query.toLowerCase().trim();
    
    // Nếu query đã chứa từ khóa học tiếng Anh, giữ nguyên
    const hasEnglishKeyword = englishLearningKeywords.some(keyword => 
      basicQuery.includes(keyword)
    );

    if (hasEnglishKeyword) {
      return query;
    }

    // Thêm từ khóa học tiếng Anh vào query
    const randomKeyword = englishLearningKeywords[
      Math.floor(Math.random() * englishLearningKeywords.length)
    ];
    
    return `${query} ${randomKeyword}`;
  }

  // Tìm kiếm dự phòng nếu không tìm thấy kết quả
  private static async fallbackSearch(query: string, maxResults: number): Promise<Video[]> {
    console.log('Trying fallback search for:', query);
    
    const fallbackUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(query)}&type=video&key=${YOUTUBE_API_KEY}`;
    
    const searchData: YouTubeSearchResponse = await this.makeRequest(fallbackUrl);
    
    if (!searchData.items || searchData.items.length === 0) {
      return [];
    }

    const videoIds = searchData.items.map(item => item.id.videoId).join(',');
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
    
    const detailsData: YouTubeVideoDetailsResponse = await this.makeRequest(detailsUrl);

    const videos: Video[] = searchData.items.map((item, index) => {
      const details = detailsData.items[index];
      const startTime = this.generateStartTime();
      
      return {
        videoId: item.id.videoId,
        title: this.cleanTitle(item.snippet.title),
        channel: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
        duration: this.formatDuration(details?.contentDetails?.duration || 'PT0M0S'),
        publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString('vi-VN'),
        start: startTime,
        viewCount: parseInt(details?.statistics?.viewCount || '0')
      };
    });

    videos.sort((a, b) => b.viewCount - a.viewCount);
    return videos;
  }

  // Tạo thời gian bắt đầu ngẫu nhiên (giả lập tính năng của Youglish)
  private static generateStartTime(): number {
    // Youglish thường bắt đầu ở các thời điểm khác nhau trong video
    // Ở đây chúng ta giả lập bằng cách chọn ngẫu nhiên từ 10-50% của video
    return Math.floor(Math.random() * 120) + 30; // 30-150 giây
  }

  private static cleanTitle(title: string): string {
    return title
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private static formatDuration(duration: string): string {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '0:00';

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  static async testAPIKey(): Promise<boolean> {
    if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY.includes('YOUR_ACTUAL_YOUTUBE_API_KEY') || YOUTUBE_API_KEY.includes('AIzaSyCxxxxxxxx')) {
      return false;
    }

    try {
      const testUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=dQw4w9WgXcQ&key=${YOUTUBE_API_KEY}`;
      await this.makeRequest(testUrl);
      return true;
    } catch (error) {
      console.error('API Key test failed:', error);
      return false;
    }
  }
}