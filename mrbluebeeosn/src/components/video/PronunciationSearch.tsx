// components/VideoSearch.tsx / BY DPSK
// YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

import React, { useState, useRef, ChangeEvent, FormEvent, useEffect, MouseEvent } from 'react';
import { Video } from './types';
import { YouTubeAPI } from './youtubeApi';

const YouglishClone: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [apiReady, setApiReady] = useState<boolean>(false);
  const [apiChecked, setApiChecked] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Kiểm tra API Key khi component mount
  useEffect(() => {
    const checkAPI = async () => {
      try {
        setLoading(true);
        const isApiValid = await YouTubeAPI.testAPIKey();
        setApiReady(isApiValid);
        if (!isApiValid) {
          setError('YouTube API chưa được cấu hình đúng. Vui lòng làm theo hướng dẫn bên dưới.');
        }
      } catch (err) {
        console.error('API check failed:', err);
        setApiReady(false);
        setError('Không thể kết nối đến YouTube API. Vui lòng kiểm tra kết nối mạng.');
      } finally {
        setLoading(false);
        setApiChecked(true);
      }
    };

    checkAPI();
  }, []);

  // Tìm kiếm video từ YouTube API
  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError('Vui lòng nhập từ khóa tìm kiếm');
      return;
    }

    if (!apiReady) {
      setError('YouTube API chưa sẵn sàng. Vui lòng làm theo hướng dẫn bên dưới để cấu hình API Key.');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(false);
    
    try {
      console.log('Starting search for:', searchTerm);
      const foundResults = await YouTubeAPI.searchVideos(searchTerm);
      
      if (foundResults.length === 0) {
        setError('Không tìm thấy video nào phù hợp với từ khóa của bạn. Vui lòng thử từ khóa khác.');
        setSearched(false);
      } else {
        setResults(foundResults);
        setCurrentIndex(0);
        setSearched(true);
        setIsPlaying(true);
        setError('');
      }
    } catch (err: any) {
      console.error('Lỗi khi tìm kiếm video:', err);
      
      let errorMessage = 'Có lỗi xảy ra khi tìm kiếm video. ';
      
      if (err.message.includes('API Key chưa được cấu hình')) {
        errorMessage = err.message;
      } else if (err.message.includes('API Key không hợp lệ')) {
        errorMessage = 'API Key không hợp lệ. Vui lòng kiểm tra lại API Key.';
      } else if (err.message.includes('hạn mức')) {
        errorMessage = 'Đã vượt quá hạn mức API. Vui lòng thử lại sau.';
      } else if (err.message.includes('mạng')) {
        errorMessage = 'Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet.';
      } else {
        errorMessage += err.message || 'Vui lòng thử lại.';
      }
      
      setError(errorMessage);
      setSearched(false);
    } finally {
      setLoading(false);
    }
  };

  // Chuyển video trước
  const handlePrevious = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(true);
    }
  };

  // Chuyển video sau
  const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(true);
    }
  };

  // Toggle play/pause
  const togglePlay = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  // Xử lý thay đổi tốc độ phát
  const handlePlaybackRateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const rate = parseFloat(e.target.value);
    setPlaybackRate(rate);
    console.log(`Tốc độ phát đã thay đổi thành: ${rate}x`);
  };

  // Xử lý thay đổi phụ đề
  const handleSubtitlesChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const enabled = e.target.value === '1';
    setSubtitlesEnabled(enabled);
  };

  // Tìm kiếm lại với từ khóa khác
  const handleSearchDifferent = () => {
    setSearched(false);
    setResults([]);
    setCurrentIndex(0);
  };

  const currentVideo = results[currentIndex];

  // Tạo URL YouTube với thời gian bắt đầu (giống Youglish)
  const getVideoUrl = (): string => {
    if (!currentVideo) return '';
    const autoplay = isPlaying ? 1 : 0;
    const ccLoadPolicy = subtitlesEnabled ? 1 : 0;
    // Thêm thời gian bắt đầu vào URL (tính bằng giây)
    return `https://www.youtube.com/embed/${currentVideo.videoId}?start=${currentVideo.start}&autoplay=${autoplay}&rel=0&cc_load_policy=${ccLoadPolicy}`;
  };

  // Định dạng thời gian (giây -> phút:giây)
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="youglish-container">
      <div className="youglish-main-container">
        {/* Header */}
        <div className="youglish-header">
          <div className="youglish-logo">
            <i className="fas fa-volume-up youglish-logo-icon"></i>
            <h1 className="youglish-logo-text">VideoSearch</h1>
          </div>
          <p className="youglish-subtitle">Tìm kiếm và học từ video YouTube có phụ đề - Giống Youglish</p>
        </div>

        {/* API Configuration Guide */}
        {!apiReady && apiChecked && (
          <div className="youglish-error" style={{marginTop: '20px', maxWidth: '800px', margin: '20px auto'}}>
            <i className="fas fa-exclamation-triangle youglish-error-icon"></i>
            <h3 style={{color: '#dc2626', marginBottom: '15px'}}>Cấu hình YouTube API</h3>
            <div style={{textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.6'}}>
              <p><strong>Để sử dụng ứng dụng, bạn cần:</strong></p>
              <ol style={{marginLeft: '20px', marginBottom: '15px'}}>
                <li>Truy cập <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" style={{color: '#7c3aed'}}>Google Cloud Console</a></li>
                <li>Tạo project mới hoặc chọn project có sẵn</li>
                <li>Kích hoạt "YouTube Data API v3" trong thư viện APIs</li>
                <li>Tạo API Key trong mục Credentials</li>
                <li>Thay thế API Key trong file <code>youtubeApi.ts</code></li>
              </ol>
              <p><strong>File cần sửa: </strong><code>src/youtubeApi.ts</code></p>
              <p><strong>Dòng cần thay thế: </strong><code>const YOUTUBE_API_KEY = 'YOUR_ACTUAL_YOUTUBE_API_KEY_HERE';</code></p>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="youglish-search-container">
          <form onSubmit={handleSearch} className="youglish-search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              placeholder="Nhập từ hoặc cụm từ tiếng Anh bạn muốn tìm... (vd: hello, thank you, how are you)"
              className="youglish-search-input"
              disabled={loading || !apiReady}
            />
            <button
              type="submit"
              className="youglish-search-button"
              disabled={loading || !searchTerm.trim() || !apiReady}
            >
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-search'}`}></i>
            </button>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="youglish-loading">
            <i className="fas fa-spinner youglish-loading-spinner"></i>
            <p className="youglish-loading-text">Đang tìm kiếm video phù hợp...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="youglish-error">
            <i className="fas fa-exclamation-triangle youglish-error-icon"></i>
            <p className="youglish-error-text">{error}</p>
            {!error.includes('API Key chưa được cấu hình') && (
              <p className="youglish-error-text" style={{fontSize: '0.9rem', marginTop: '10px'}}>
                💡 Mẹo: Thử các từ/cụm từ đơn giản như "hello", "thank you", "how are you", "good morning"
              </p>
            )}
          </div>
        )}

        {/* Video Player */}
        {!loading && searched && currentVideo && (
          <div className="youglish-video-player-container">
            <div className="youglish-video-wrapper">
              <iframe
                ref={iframeRef}
                key={`${currentVideo.videoId}-${currentVideo.start}-${isPlaying}-${subtitlesEnabled}`}
                src={getVideoUrl()}
                className="youglish-video-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video: ${currentVideo.title}`}
              />
            </div>

            {/* Video Info */}
            <div className="youglish-video-info">
              <h2 className="youglish-video-title">
                {currentVideo.title}
              </h2>
              <p className="youglish-video-channel">
                {currentVideo.channel} • {currentVideo.duration} • {currentVideo.publishedAt}
              </p>
              
              <div className="youglish-controls-container">
                <div className="youglish-video-count">
                  Video <span>{currentIndex + 1}</span> / {results.length}
                </div>

                {/* Controls */}
                <div className="youglish-controls">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="youglish-control-button"
                  >
                    <i className="fas fa-chevron-left"></i>
                    <span>Trước</span>
                  </button>

                  <button
                    onClick={togglePlay}
                    className="youglish-control-button youglish-play-button"
                  >
                    {isPlaying ? (
                      <>
                        <i className="fas fa-pause"></i>
                        <span>Dừng</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-play"></i>
                        <span>Phát</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex === results.length - 1}
                    className="youglish-control-button"
                  >
                    <span>Sau</span>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              {/* Settings */}
              <div className="youglish-settings-container">
                <div className="youglish-setting">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Tốc độ:</span>
                  <select 
                    value={playbackRate} 
                    onChange={handlePlaybackRateChange}
                    className="youglish-setting-select"
                  >
                    <option value={0.25}>0.25x</option>
                    <option value={0.5}>0.5x</option>
                    <option value={0.75}>0.75x</option>
                    <option value={1}>1x</option>
                    <option value={1.25}>1.25x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={1.75}>1.75x</option>
                    <option value={2}>2x</option>
                  </select>
                </div>

                <div className="youglish-setting">
                  <i className="fas fa-closed-captioning"></i>
                  <span>Phụ đề:</span>
                  <select 
                    value={subtitlesEnabled ? 1 : 0} 
                    onChange={handleSubtitlesChange}
                    className="youglish-setting-select"
                  >
                    <option value={0}>Tắt</option>
                    <option value={1}>Bật (nếu có)</option>
                  </select>
                </div>
              </div>

              {/* Word highlight với thời gian bắt đầu */}
              <div className="youglish-keyword-highlight">
                <p className="youglish-keyword-text">
                  <span className="youglish-keyword">Từ khóa:</span> "{searchTerm}"
                  <span style={{marginLeft: '15px', color: '#666'}}>
                    <i className="fas fa-clock" style={{marginRight: '5px'}}></i>
                    Bắt đầu từ {formatTime(currentVideo.start)}
                  </span>
                </p>
                <button 
                  onClick={handleSearchDifferent}
                  className="youglish-control-button"
                  style={{marginTop: '10px', fontSize: '0.8rem', padding: '5px 10px'}}
                >
                  <i className="fas fa-redo" style={{marginRight: '5px'}}></i>
                  Tìm kiếm từ khác
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Initial State */}
        {!loading && !searched && !error && apiReady && (
          <div className="youglish-initial-state">
            <div className="youglish-initial-box">
              <i className="fas fa-search youglish-initial-icon"></i>
              <h3 className="youglish-initial-title">
                Bắt đầu tìm kiếm
              </h3>
              <p className="youglish-initial-text">
                Nhập từ hoặc cụm từ tiếng Anh để tìm video có phát âm
              </p>
              <p className="youglish-initial-hint">
                Thử: hello, thank you, how are you, good morning, I love you
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouglishClone;