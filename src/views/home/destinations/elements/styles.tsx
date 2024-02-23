import styled from "styled-components";
import { Text } from "@/components/Text";

export const CardWrapper = styled.div`
  width: 327px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 280px;
  }
`;

export const CardTitle = styled(Text)`
  position: absolute;
  font-weight: 700;
  bottom: 0;
  line-height: 1;
`;
