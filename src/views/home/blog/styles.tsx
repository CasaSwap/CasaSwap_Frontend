import styled from "styled-components";
import { Container } from "@/components/Box";

export const BlogSection = styled(Container)`
  ${({ theme }) => theme.mediaQueries.lg} {
    .middle-card {
      display: none;
    }
  }
`;
export const CardDesk = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

export const BlogSliderWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
  .blogcard {
    width: 200px;
  }
`;
