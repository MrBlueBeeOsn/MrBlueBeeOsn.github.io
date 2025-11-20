// components/VideoSearch.tsx / BY DPSK
// YOUTUBE_API_KEY = 'AIzaSyBKfy2qoaxzxBRs7WbMXznGJIxshxKPK-A';

import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { Video } from './types';
import { YouTubeAPI } from './youtubeApi';
import './YouglishClone.css';

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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Tìm kiếm video từ YouTube API
  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError('Vui lòng nhập từ khóa tìm kiếm');
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
    } catch (err) {
      console.error('Lỗi khi tìm kiếm video:', err);
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Có lỗi xảy ra khi tìm kiếm video. Vui lòng kiểm tra API Key và thử lại.';
      setError(errorMessage);
      setSearched(false);
    } finally {
      setLoading(false);
    }
  };

  // Chuyển video trước
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(true);
    }
  };

  // Chuyển video sau
  const handleNext = () => {
    if (currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(true);
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
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

  const currentVideo = results[currentIndex];

  // Tạo URL YouTube với thời gian bắt đầu
  const getVideoUrl = (): string => {
    if (!currentVideo) return '';
    const autoplay = isPlaying ? 1 : 0;
    const ccLoadPolicy = subtitlesEnabled ? 1 : 0;
    return `https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=${autoplay}&rel=0&cc_load_policy=${ccLoadPolicy}`;
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
          <p className="youglish-subtitle">Tìm kiếm và học từ video YouTube có phụ đề</p>
        </div>

        {/* Search Bar */}
        <div className="youglish-search-container">
          <form onSubmit={handleSearch} className="youglish-search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              placeholder="Nhập từ khóa bạn muốn tìm kiếm... (vd: learn english, pronunciation, vocabulary)"
              className="youglish-search-input"
              disabled={loading}
            />
            <button
              type="submit"
              className="youglish-search-button"
              disabled={loading || !searchTerm.trim()}
            >
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-search'}`}></i>
            </button>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="youglish-loading">
            <i className="fas fa-spinner youglish-loading-spinner"></i>
            <p className="youglish-loading-text">Đang tìm kiếm video...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="youglish-error">
            <i className="fas fa-exclamation-triangle youglish-error-icon"></i>
            <p className="youglish-error-text">{error}</p>
            <p className="youglish-error-text" style={{fontSize: '0.9rem', marginTop: '10px'}}>
              💡 Mẹo: Thử các từ khóa như "english pronunciation", "learn english", "vocabulary"
            </p>
          </div>
        )}

        {/* Video Player */}
        {!loading && searched && currentVideo && (
          <div className="youglish-video-player-container">
            <div className="youglish-video-wrapper">
              <iframe
                ref={iframeRef}
                key={`${currentVideo.videoId}-${isPlaying}-${subtitlesEnabled}`}
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
                  Kết quả <span>{currentIndex + 1}</span> / {results.length}
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

              {/* Word highlight */}
              <div className="youglish-keyword-highlight">
                <p className="youglish-keyword-text">
                  <span className="youglish-keyword">Từ khóa tìm kiếm:</span> "{searchTerm}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Initial State */}
        {!loading && !searched && !error && (
          <div className="youglish-initial-state">
            <div className="youglish-initial-box">
              <i className="fas fa-search youglish-initial-icon"></i>
              <h3 className="youglish-initial-title">
                Bắt đầu tìm kiếm
              </h3>
              <p className="youglish-initial-text">
                Nhập từ khóa để tìm video YouTube có phát âm từ đó
              </p>
              <p className="youglish-initial-hint">
                Thử: learn english, pronunciation, vocabulary, speaking practice
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouglishClone;