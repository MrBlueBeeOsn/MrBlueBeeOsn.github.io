// components/VideoSearch.tsx / BY DPSK
import React, { useState } from 'react';
import axios from 'axios';
import SearchIcon from '@/components/icon/SearchIcon';
// import './VideoSearch.css';

const ClearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

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
      setError('Error while searching for video. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchWord('');
    setVideos([]);
    setTimestamps({});
    setError('');
  };

  const analyzeVideo = async (videoId: string) => {
    setActiveVideoId(videoId);
    
    try {
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
          <button 
            type="submit" 
            disabled={loading || !searchWord.trim()}
            className="search-button"
          >
            {loading ? (
              <div className="loading-spinner"></div>
            ) : (
              <SearchIcon />
            )}
          </button>
          
          <div className="input-wrapper">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="Enter word or phrase..."
              className="search-input"
            />
            {searchWord && (
              <button 
                type="button"
                onClick={clearSearch}
                className="clear-button"
                aria-label="Xóa tìm kiếm"
              >
                <ClearIcon />
              </button>
            )}
          </div>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      {/* Hiển thị từ khóa tìm kiếm và nút xóa */}
      {videos.length > 0 && (
        <div className="search-results-header">
          <div className="search-info">
            <span>Search results for: <strong>"{searchWord}"</strong></span>
            <span className="video-count">{videos.length} video</span>
          </div>
          {/* <button 
            onClick={clearSearch}
            className="clear-all-button"
          >
            <ClearIcon />
            Xóa tất cả
          </button> */}
        </div>
      )}

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
                {activeVideoId === video.id.videoId ? (
                  <>
                    <div className="small-spinner"></div>
                    Đang phân tích...
                  </>
                ) : (
                  `Tìm "${searchWord}" trong video`
                )}
              </button>

              {timestamps[video.id.videoId] && (
                <div className="timestamps-section">
                  <h4>The word appears at:</h4>
                  <div className="timestamps-list">
                    {timestamps[video.id.videoId].map((ts, index) => (
                      <button
                        key={index}
                        onClick={() => playVideoAtTime(video.id.videoId, ts.time)}
                        className="timestamp-button"
                      >
                        <span className="timestamp-time">{formatTime(ts.time)}</span>
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

      {/* {videos.length === 0 && !loading && searchWord && (
        <div className="empty-state">
          <p>Không tìm thấy video nào cho "<strong>{searchWord}</strong>"</p>
          <p className="suggestion">Thử với từ khóa khác hoặc kiểm tra chính tả</p>
        </div>
      )}

      {videos.length === 0 && !loading && !searchWord && (
        <div className="empty-state">
          <p>Nhập từ khóa để tìm kiếm video có chứa từ đó</p>
          <p className="suggestion">Ví dụ: "however", "although", "get along with"</p>
        </div>
      )} */}
    </div>
  );
};

export default VideoSearch;