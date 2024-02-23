import styled from "styled-components";
import { Flex } from "@/components/Box";

export const DiscoverSection = styled(Flex)`
  position: relative;
  margin-top: 90px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 51px;
  }
  .discover-bg {
    z-index: -1;
  }
  color: white;
`;

export const CtaWrapper = styled.div`
  height: 100%;
  width: 288px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  ::after {
    content: " ";
    width: 288px;
    top: 0;
    right: 0;
    z-index: -1;
    position: absolute;
    border-bottom: 200px solid #bea18d;
    border-left: 65px solid transparent;
  }
`;
