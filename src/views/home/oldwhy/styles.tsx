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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-bottom: 15px;
  max-width: 327px;
  min-height: 150px;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: none;
    width: 100%;
  }
`;
