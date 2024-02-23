import styled from "styled-components";
import { Box } from "@/components/Box";

export const BlogCardWrapper = styled(Box)`
  img {
    width: 200px;
    height: 711px;
    object-fit: cover;
    filter: brightness(0.8);
  }
  img[data-small="true"] {
    width: 222px;
    height: 206px;
  }
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;
export const ContentWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  margin: 0 20px;
  .desc {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 20px;
    max-height: 60px;
  }
`;
