export interface Video {
  videoId: string;
  title: string;
  channel: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  start: number; // Thời gian bắt đầu tính bằng giây
  viewCount: number; // Thêm viewCount để sắp xếp
}

export interface YouTubeSearchResponse {
  items: Array<{
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      channelTitle: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      publishedAt: string;
    };
  }>;
  error?: {
    code: number;
    message: string;
  };
}

export interface YouTubeVideoDetailsResponse {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      publishedAt: string;
    };
    contentDetails: {
      duration: string;
    };
    statistics?: {
      viewCount: string;
    };
  }>;
  error?: {
    code: number;
    message: string;
  };
}