import React, { useRef } from "react";
import { isEmpty } from "lodash";
import { ProgressBar } from "@/components/ProgressBar";
import { useVideoPlayer } from "@/hooks";
// icons
import { GrPauseFill, GrPlayFill } from "react-icons/gr";
import {
  VideoWrapper,
  ToolWrapper,
  ProgressWrapper,
  PlayerWrapper,
  PlayerInner,
  PauseWrapper,
} from "./styles";
import { VideoProps } from "../types";
// -----------------------------------------------------------------------------

const Video: React.FC<VideoProps> = ({
  media,
  mode = "block",
  width,
  height,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { playerState, togglePlay, handleOnTimeUpdate } = useVideoPlayer(
    videoRef,
    !isEmpty(media)
  );

  return (
    <VideoWrapper
      className="videoWrapper"
      mode={mode}
      width={width}
      height={height}
      onClick={() => {
        togglePlay();
      }}
    >
      <video
        src={media}
        autoPlay={true}
        width="100%"
        ref={videoRef}
        controls={false}
        onTimeUpdate={handleOnTimeUpdate}
      ></video>
      <ProgressWrapper>
        <ProgressBar current={playerState.progress} />
      </ProgressWrapper>
      <ToolWrapper
        $processing={playerState.isPlaying}
        $current={playerState.progress}
      >
        <PlayerWrapper
          $processing={playerState.isPlaying}
          className="playerWrapper"
        >
          <PlayerInner onClick={togglePlay}>
            <GrPlayFill />
          </PlayerInner>
        </PlayerWrapper>
        <PauseWrapper
          $processing={playerState.isPlaying}
          className="pauseWrapper"
        >
          <PlayerInner onClick={togglePlay}>
            <GrPauseFill />
          </PlayerInner>
        </PauseWrapper>
      </ToolWrapper>
    </VideoWrapper>
  );
};

export default Video;
