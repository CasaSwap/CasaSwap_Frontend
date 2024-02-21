import styled from "styled-components";
import { Container, Flex } from "@/components/Box";

export const WhySection = styled(Container)`
  position: relative;
  margin-top: 90px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 51px;
  }
`;

export const AdvantageCardWrapper = styled.div`
  text-align: center;
  padding: 15px;
  border: 1px solid #e5e5e4;
  border-radius: 8px;
  margin-bottom: 15px;
  max-width: 327px;
  min-height: 150px;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: none;
    width: 100%;
  }
`;

export const VideContainer = styled(Flex)`
  flex: 1;
  max-width: 688px;
  margin-left: 30px;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 0px;
  }
  .videoWrapper {
    border-radius: 8px;
    overflow: hidden;
  }
`;
