import styled from "styled-components";
import Link from "@/components/Links";
import { Container, Flex, Grid } from "@/components/Box";

export const LinkSectionWrapper = styled(Container)`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: column;
    justify-content: center;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }
`;
export const LinkGridWrapper = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr 1fr;

  width: 75%;
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const LinkItem = styled(Link)`
  text-transform: capitalize;
  color: #888888;
  margin-bottom: 2px;
`;

export const LinkGroup = styled(Flex)`
  flex-direction: column;
  padding: 0 15px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 10px;
  }
`;

export const LocalGroup = styled(Flex)`
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;
