import { useState, useEffect } from "react";

// -----------------------------------------------------------------

const useVideoPlayer = (videoElement, run = false) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: true,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const handleOnTimeUpdate = () => {
    if (!videoElement || !videoElement.current) {
      return;
    }
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    if (playerState.isPlaying && progress < 100) {
      setPlayerState({
        ...playerState,
        progress,
      });
    }
    if (progress >= 100) {
      videoElement.current.pause();
      videoElement.current.currentTime = 0;
      setPlayerState({
        ...playerState,
        isPlaying: false,
        progress: 0,
      });
    }
  };

  const handleVideoProgress = (event) => {
    if (!videoElement || !videoElement.current) {
      return;
    }
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    if (!videoElement || !videoElement.current) {
      return;
    }
    if (run)
      playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement, run]);

  useEffect(() => {
    if (!videoElement || !videoElement.current) {
      return;
    }
    if (run)
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement, run]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;
