import styled from "styled-components";
import { Box } from "@/components/Box";

export const PressSection = styled(Box)`
  position: relative;
  background-color: #f1f1f1;
  img {
    max-width: 130px;
    max-height: 50px;
    width: 100%;
    margin: 0 10px;
    filter: grayscale(100%);
  }
  img:hover {
    filter: none;
  }
`;
