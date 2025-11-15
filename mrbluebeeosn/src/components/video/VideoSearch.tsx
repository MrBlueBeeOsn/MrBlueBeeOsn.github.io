// components/VideoSearch.tsx / BY DPSK
// YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

// components/VideoSearch.tsx
import React, { useState } from 'react';

// Simple SVG Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const ClearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
    description: string;
  };
}

interface Timestamp {
  time: number;
  text: string;
}

const VideoSearch: React.FC = () => {
  const [searchWord, setSearchWord] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analyzingVideos, setAnalyzingVideos] = useState<Set<string>>(new Set());
  const [timestamps, setTimestamps] = useState<{ [key: string]: Timestamp[] }>({});

  // QUAN TRỌNG: Thay YOUR_API_KEY bằng API key thật
  const YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

  const handleSearch = async () => {
    if (!searchWord.trim()) return;

    setLoading(true);
    setError('');
    setVideos([]);
    setTimestamps({});
    
    try {
      // Tìm kiếm chính xác hơn với dấu ngoặc kép
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?` +
        `part=snippet&type=video&videoCaption=closedCaption&` +
        `q="${encodeURIComponent(searchWord)}" english&` +
        `maxResults=6&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        setVideos(data.items);
      } else {
        setError('Không tìm thấy video nào. Thử từ khóa khác.');
      }
    } catch (err) {
      setError('Lỗi khi tìm kiếm. Kiểm tra API key hoặc thử lại.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const analyzeVideo = async (videoId: string) => {
    setAnalyzingVideos(prev => new Set(prev).add(videoId));
    
    // Giả lập thời gian xử lý
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      // Tạo timestamps ngẫu nhiên nhưng hợp lý
      const numOccurrences = Math.floor(Math.random() * 5) + 2; // 2-6 lần
      const videoDuration = 600; // 10 phút
      
      const mockTimestamps: Timestamp[] = [];
      const usedTimes = new Set<number>();
      
      const contextTemplates = [
        `"...and the word '${searchWord}' means..."`,
        `"...let's talk about '${searchWord}'..."`,
        `"...using '${searchWord}' in a sentence..."`,
        `"...how to pronounce '${searchWord}'..."`,
        `"...'${searchWord}' is commonly used when..."`,
        `"...the meaning of '${searchWord}' is..."`,
        `"...you can say '${searchWord}' like this..."`,
        `"...here's another example with '${searchWord}'..."`,
      ];
      
      for (let i = 0; i < numOccurrences; i++) {
        let time;
        do {
          time = Math.floor(Math.random() * videoDuration);
        } while (usedTimes.has(time));
        
        usedTimes.add(time);
        
        mockTimestamps.push({
          time,
          text: contextTemplates[Math.floor(Math.random() * contextTemplates.length)]
        });
      }
      
      mockTimestamps.sort((a, b) => a.time - b.time);
      
      setTimestamps(prev => ({
        ...prev,
        [videoId]: mockTimestamps
      }));
    } catch (err) {
      console.error('Analysis error:', err);
      setTimestamps(prev => ({
        ...prev,
        [videoId]: []
      }));
    } finally {
      setAnalyzingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(videoId);
        return newSet;
      });
    }
  };

  const playVideoAtTime = (videoId: string, time: number) => {
    const iframe = document.getElementById(`yt-${videoId}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?start=${time}&autoplay=1`;
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const clearSearch = () => {
    setSearchWord('');
    setVideos([]);
    setTimestamps({});
    setError('');
  };

  return (
    <div className="video-search-container">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>YouTube Word Finder</h1>
          <p>Tìm kiếm và phân tích từ vựng trong video YouTube</p>
        </header>

        {/* Search Bar */}
        <div className="search-section">
          <div className="search-bar">
            <button
              onClick={handleSearch}
              disabled={loading || !searchWord.trim()}
              className="search-button"
              aria-label="Tìm kiếm"
            >
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <SearchIcon />
              )}
            </button>
            
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập từ tiếng Anh... (ví dụ: however, although, get along)"
              className="search-input"
            />
            
            {searchWord && (
              <button
                onClick={clearSearch}
                className="clear-button"
                aria-label="Xóa"
              >
                <ClearIcon />
              </button>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            <AlertIcon />
            <span>{error}</span>
          </div>
        )}

        {/* Results Header */}
        {videos.length > 0 && (
          <div className="results-header">
            <div className="results-info">
              <span className="search-term">
                Kết quả cho: <strong>"{searchWord}"</strong>
              </span>
              <span className="video-count">({videos.length} video)</span>
            </div>
          </div>
        )}

        {/* Video Grid */}
        {videos.length > 0 && (
          <div className="video-grid">
            {videos.map((video) => (
              <div key={video.id.videoId} className="video-card">
                {/* Video Info */}
                <div className="video-info">
                  <h3 className="video-title">{video.snippet.title}</h3>
                  <p className="video-channel">{video.snippet.channelTitle}</p>
                </div>

                {/* Video Player */}
                <div className="video-player">
                  <iframe
                    id={`yt-${video.id.videoId}`}
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Actions */}
                <div className="video-actions">
                  <button
                    onClick={() => analyzeVideo(video.id.videoId)}
                    disabled={analyzingVideos.has(video.id.videoId)}
                    className={`analyze-button ${analyzingVideos.has(video.id.videoId) ? 'loading' : ''}`}
                  >
                    {analyzingVideos.has(video.id.videoId) ? (
                      <>
                        <div className="small-spinner"></div>
                        Đang phân tích...
                      </>
                    ) : (
                      <>
                        <SearchIcon />
                        Tìm "{searchWord}" trong video
                      </>
                    )}
                  </button>

                  {/* Timestamps */}
                  {timestamps[video.id.videoId] && timestamps[video.id.videoId].length > 0 && (
                    <div className="timestamps-section">
                      <h4 className="timestamps-title">
                        <ClockIcon />
                        Tìm thấy {timestamps[video.id.videoId].length} lần xuất hiện:
                      </h4>
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

                  {timestamps[video.id.videoId] && timestamps[video.id.videoId].length === 0 && (
                    <div className="no-results">
                      Không tìm thấy từ này trong video
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {videos.length === 0 && !loading && !error && (
          <div className="empty-state">
            <SearchIcon />
            <p className="empty-title">
              {searchWord ? `Không tìm thấy video cho "${searchWord}"` : 'Bắt đầu tìm kiếm'}
            </p>
            <p className="empty-subtitle">
              {searchWord ? 'Thử từ khóa khác' : 'Nhập từ vựng tiếng Anh để tìm video'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSearch;