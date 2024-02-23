import styled from "styled-components";
import { Box, Container } from "@/components/Box";

export const DiscoverSection = styled(Box)`
  position: relative;
  background-color: #f1f1f1;
  width: 100vw;
  overflow: hidden;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  .swiper {
    overflow: visible !important;
  }
`;
export const DestinationSliderWrapper = styled.div`
  margin-bottom: 48px;
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 15%,
    #000 85%,
    transparent
  );
`;
