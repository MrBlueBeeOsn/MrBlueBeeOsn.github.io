// components/VideoSearch.tsx / BY DPSK
import React, { useState } from 'react';
import axios from 'axios';
// import './VideoSearch.css';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
}

interface Timestamp {
  time: number;
  text: string;
}

const VideoSearch: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [activeVideoId, setActiveVideoId] = useState<string>('');
  const [timestamps, setTimestamps] = useState<{ [key: string]: Timestamp[] }>({});

  const YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A'; // Thay bằng API key thật

  const searchVideos = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchWord.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      // Tìm kiếm video có phụ đề
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            type: 'video',
            videoCaption: 'closedCaption',
            q: `${searchWord} English pronunciation interview`,
            maxResults: 8,
            key: YOUTUBE_API_KEY
          }
        }
      );

      setVideos(response.data.items);
    } catch (err) {
      setError('Lỗi khi tìm kiếm video. Vui lòng thử lại.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const analyzeVideo = async (videoId: string) => {
    setActiveVideoId(videoId);
    
    try {
      // Giả lập phân tích timestamp - Trong thực tế cần backend phức tạp
      const mockTimestamps: Timestamp[] = [
        { time: 30, text: `"...the ${searchWord} was important..."` },
        { time: 85, text: `"...discussing ${searchWord} in context..."` },
        { time: 142, text: `"...meaning of ${searchWord}..."` }
      ];
      
      setTimestamps(prev => ({
        ...prev,
        [videoId]: mockTimestamps
      }));
    } catch (err) {
      console.error('Analysis error:', err);
    }
  };

  const playVideoAtTime = (videoId: string, time: number) => {
    // Cập nhật iframe để phát từ thời điểm cụ thể
    const iframe = document.getElementById(`yt-${videoId}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?start=${time}&autoplay=1&enablejsapi=1`;
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-search-container">
      {/* <h2>Tìm kiếm từ trong video YouTube</h2> */}
      
      <form onSubmit={searchVideos} className="search-form">
        <div className="input-group">
          <input
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Enter word or phrase..."
            className="search-input"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="search-button"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <div className="video-header">
              <h3 className="video-title">{video.snippet.title}</h3>
              <p className="video-channel">{video.snippet.channelTitle}</p>
            </div>
            
            <div className="video-player">
              <iframe
                id={`yt-${video.id.videoId}`}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-actions">
              <button
                onClick={() => analyzeVideo(video.id.videoId)}
                className="analyze-button"
                disabled={activeVideoId === video.id.videoId}
              >
                {activeVideoId === video.id.videoId ? 
                  'Đang phân tích...' : 
                  `Find "${searchWord}" in the video`}
              </button>

              {timestamps[video.id.videoId] && (
                <div className="timestamps-section">
                  <h4>Xuất hiện tại:</h4>
                  <div className="timestamps-list">
                    {timestamps[video.id.videoId].map((ts, index) => (
                      <button
                        key={index}
                        onClick={() => playVideoAtTime(video.id.videoId, ts.time)}
                        className="timestamp-button"
                      >
                        {formatTime(ts.time)}
                        <span className="timestamp-text">{ts.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {videos.length === 0 && !loading && (
        <div className="empty-state">
          {/* <p>Nhập từ khóa để tìm kiếm video có chứa từ đó</p> */}
        </div>
      )}
    </div>
  );
};

export default VideoSearch;