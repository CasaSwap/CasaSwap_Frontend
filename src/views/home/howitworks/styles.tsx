import styled from "styled-components";
import { Container, Flex } from "@/components/Box";

export const HowWorkSection = styled(Container)`
  position: relative;
  margin-top: 90px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 51px;
  }
`;

export const Stepwrapper = styled.div`
  border: 1px solid #e5e5e4;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
`;

export const StepNumber = styled(Flex)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%;
  border: 1px solid black;
  margin-bottom: 5px;
  line-height: 0;
`;
