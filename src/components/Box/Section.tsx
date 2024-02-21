import { styled } from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";
import { FlexProps } from "./types";

const Section = styled(Box)<FlexProps>`
  ${flexbox}
`;

export const Container = styled(Section)<FlexProps>`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

Section.defaultProps = {
  as: "section",
};

export default Section;
