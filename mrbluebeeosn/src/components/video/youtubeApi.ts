// YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

import { Video, YouTubeSearchResponse, YouTubeVideoDetailsResponse } from './types';

// Đảm bảo bạn đã thay thế bằng API Key thực tế của bạn
// Lấy từ: https://console.cloud.google.com/apis/credentials
const YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A'; // THAY THẾ BẰNG API KEY THẬT

export class YouTubeAPI {
  private static async makeRequest<T>(url: string): Promise<T> {
    try {
      console.log('Making request to:', url.replace(YOUTUBE_API_KEY, 'API_KEY_HIDDEN'));
      
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
          throw new Error(`Lỗi API: ${response.status} - ${errorText}`);
        }
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Không thể kết nối đến YouTube API. Kiểm tra kết nối mạng.');
    }
  }

  static async searchVideos(query: string, maxResults: number = 10): Promise<Video[]> {
    try {
      // Thêm từ khóa liên quan đến học tiếng Anh để có kết quả tốt hơn
      const searchQuery = `${query} english pronunciation learning`;
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(searchQuery)}&type=video&videoCaption=closedCaption&key=${YOUTUBE_API_KEY}`;
      
      console.log('Searching YouTube for:', query);
      const searchData: YouTubeSearchResponse = await this.makeRequest(searchUrl);
      
      if (!searchData.items || searchData.items.length === 0) {
        console.log('No videos found for query:', query);
        return [];
      }

      // Lấy thông tin chi tiết về video
      const videoIds = searchData.items.map(item => item.id.videoId).join(',');
      const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
      
      const detailsData: YouTubeVideoDetailsResponse = await this.makeRequest(detailsUrl);

      const videos: Video[] = searchData.items.map((item, index) => {
        const details = detailsData.items[index];
        return {
          videoId: item.id.videoId,
          title: this.cleanTitle(item.snippet.title),
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
          duration: this.formatDuration(details?.contentDetails?.duration || 'PT0M0S'),
          publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString('vi-VN')
        };
      });

      console.log(`Found ${videos.length} videos`);
      return videos;
    } catch (error) {
      console.error('Error searching videos:', error);
      throw error;
    }
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

  // Phương thức kiểm tra API Key
  static async testAPIKey(): Promise<boolean> {
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