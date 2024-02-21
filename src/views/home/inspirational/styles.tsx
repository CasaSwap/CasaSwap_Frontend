import styled from "styled-components";
import { Box } from "@/components/Box";

export const InspriationalSection = styled(Box)`
  position: relative;
  background-color: #f1f1f1;
  img {
    object-fit: cover;
    border-radius: 5px;
    overflow: hidden;
    height: 380px;
  }
  img[data-small="true"] {
    height: 225px;
  }
  .sliderWarpper {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    img {
      height: 260px;
    }
    img[data-small="true"] {
      height: 140px;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    .sliderWarpper {
      display: block;
    }
    img {
      height: 260px;
    }
    .ins_grid {
      display: none;
    }
    .inspriationCard {
      max-width: 330px;
    }
  }
`;
