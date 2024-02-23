import styled from "styled-components";
import { Text } from "@/components/Text";

export const CardWrapper = styled.div`
  border-radius: 2px;
  background-color: #f8f9fa;
  box-shadow: 0 1px 0 0 rgba(182, 196, 210, 0.4);
  padding: 15px;
  height: 159px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
  width: 100%;
`;

export const DescWapper = styled(Text)`
  line-height: 16px;
  max-height: 50px;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const TestimonyInfo = styled(Text)`
  position: absolute;
  bottom: 12px;
`;
