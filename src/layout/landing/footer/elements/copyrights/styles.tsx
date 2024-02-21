import styled from "styled-components";
import Link from "@/components/Links";
import { Section } from "@/components/Box";

export const CopyRightWrapper = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-color: black;
  padding: 20px 45px 0;
  min-height: 100px;
`;

export const LinkItem = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};

  font-size: 12px;
  & > span {
    color: ${({ theme }) => theme.colors.white};
    margin: 0 3px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
