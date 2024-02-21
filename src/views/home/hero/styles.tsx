import styled from "styled-components";
import { Box, Flex, Section } from "@/components/Box";

export const HeroSection = styled(Section)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 500px;
  color: white;
  text-align: center;
  img {
    z-index: -1;
    object-fit: cover;
    object-position: top;
    filter: brightness(55%);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    padding: 0 5%;
  }
`;

export const HeroTitleWrapper = styled(Flex)`
  margin: 7% auto;
  flex-direction: column;
  align-items: center;
  max-width: 1256px;

  ${({ theme }) => theme.mediaQueries.md} {
    h1 {
      line-height: 1.3;
    }
  }
`;

export const SubScriberWrapper = styled(Box)`
  background: linear-gradient(1turn, #000, transparent);
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

export const SubScriberItemWrapper = styled.div`
  width: 33%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 45%;
    margin-top: 18px;
  }
`;

export const SearchBarWrapper = styled.div`
  margin-top: 44px;
  width: 30vw;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    margin: 24px 0;
  }
`;

export const MobileSubScriberWrapper = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.6);
  padding: 16px 0;
  border-radius: 8px;
  margin-bottom: 80px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & > :last-child {
    width: 100%;
  }
`;
