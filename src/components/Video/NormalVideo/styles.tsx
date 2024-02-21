// styled system
import styled from "styled-components";
// types
import { VideoPlayerWrapperProps, VideoWrapperProps } from "../types";
import { _withUnit } from "@/utils/helper";
import { Flex } from "@/components/Box";

// -----------------------------------------------------

export const VideoWrapper = styled.div<VideoWrapperProps>`
  position: ${({ mode }) => (mode === "fill" ? "" : "relative")};

  max-width: ${({ width }) => _withUnit(width)};
  max-height: ${({ height }) => _withUnit(height)};
  width: 100%;
  video {
    position: ${({ mode }) => (mode === "fill" ? "absolute" : "relative")};
    width: 100%;
    height: ${({ mode }) => (mode === "fill" ? "100%" : "fit-content")};
    top: 0;
    left: 0;
  }
`;
export const ToolWrapper = styled.div<VideoPlayerWrapperProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 30;
  &:hover {
    .pauseWrapper {
      opacity: ${({ $processing }) => (!$processing ? 0 : 100)};
      pointer-events: ${({ $processing }) => (!$processing ? "none" : "all")};
      transition-delay: ${({ $processing }) => (!$processing ? "0s" : "1s")};
    }
    .playerWrapper {
      opacity: ${({ $processing, $current }) =>
        $current !== 0 && $processing ? 0 : 100};
      pointer-events: ${({ $processing, $current }) =>
        $current !== 0 && $processing ? "none" : "all"};
      transition-delay: ${({ $processing }) => ($processing ? "0s" : "1s")};
    }
  }
  .playerWrapper {
    opacity: ${({ $current }) => ($current === 0 ? 100 : 0)};
    pointer-events: ${({ $current }) => ($current === 0 ? "all" : "none")};
  }
`;

export const ProgressWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;

export const ToolItem = styled.div<VideoPlayerWrapperProps>`
  z-index: 2;
  position: absolute;
  top: calc(50% - 30px);
  right: calc(50% - 20px);
  font-size: 26px;
  path {
    stroke: white;
  }
  width: 50px;
  height: 50px;
  pointer-events: none;
  transition: all 0.3s ease-in;
  ${({ theme }) => theme.mediaQueries.xs} {
    top: calc(50% - 20px);
    right: calc(50% - 40px);
    font-size: 20px;
  }
`;

export const PlayerWrapper = styled(ToolItem)`
  opacity: 100;
`;

export const PauseWrapper = styled(ToolItem)`
  opacity: 0;
`;

export const PlayerInner = styled(Flex)`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
`;
