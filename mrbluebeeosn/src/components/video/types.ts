export interface Video {
  videoId: string;
  title: string;
  channel: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
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
    contentDetails: {
      duration: string;
    };
  }>;
  error?: {
    code: number;
    message: string;
  };
}

export interface YouTubeApiError {
  error: {
    code: number;
    message: string;
    errors: Array<{
      message: string;
      domain: string;
      reason: string;
    }>;
  };
}