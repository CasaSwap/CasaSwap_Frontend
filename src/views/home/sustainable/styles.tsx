import styled from "styled-components";
import { Box, Container, Flex } from "@/components/Box";
import { Button } from "@/components/Button";

export const SustainableSection = styled(Container)`
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

export const GreenSection = styled(Box)`
  background-color: #cee3db;
  .bcroImage {
    position: absolute;
    right: 0;
    top: 26px;
  }
  .bcroMobImage {
    position: absolute;
    right: 0;
    top: 26px;
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    .bcroImage {
      display: none;
    }
    .bcroMobImage {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 170px;
    button {
      display: none;
    }
    .bcroMobImage {
      width: 100%;
      top: auto;
      text-align: center;
      bottom: -125px;
      img {
        width: 375px;
      }
    }
  }
`;
export const ToursimButton = styled(Button)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;
export const DescWrapper = styled.div`
  position: relative;
  max-width: 513px;
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 420px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 250px;
  }
  p {
    position: absolute;
    opacity: 0;
    transition: opacity 0.5s ease 0s;
  }
  p[data-show="true"] {
    opacity: 1;
    transition: opacity 0.3s ease 0s;
  }
`;
