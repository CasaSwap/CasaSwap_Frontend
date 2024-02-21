// styled system
import { Flex } from "@/components/Box";
import Link from "@/components/Links";
import styled from "styled-components";

export const NavBar = styled(Flex).attrs({ as: "nav" })`
  color: white;
  svg {
    color: white;
  }
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 50;
  &[data-pin="true"] {
    color: black;
    svg {
      color: black;
    }
    background-color: white;
    box-shadow: 20px 0px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const CtaWrapper = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

export const MobileCtaWrapper = styled.div`
  padding: 20px;
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;
