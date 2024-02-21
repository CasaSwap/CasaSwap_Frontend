import styled, { DefaultTheme } from "styled-components";
import { variant } from "styled-system";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({
  $isSuccess = false,
  $isWarning = false,
  theme,
}: StyledInputProps) => {
  if ($isWarning) {
    return theme.shadows.warning;
  }

  if ($isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

export const scaleVariants = {
  [scales.MD]: {
    height: "42px",
  },
  [scales.SM]: {
    height: "32px",
    fontSize: "14px",
  },
  [scales.LG]: {
    height: "52px",
    fontSize: "16px",
    padding: "12px 12px 12px 20px",
  },
};

const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.black};
  display: block;
  font-size: 12px;
  height: 32px;
  outline: 0;
  padding: 0 16px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    /* box-shadow: ${({ theme }) => theme.shadows.focus}; */
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  $isSuccess: false,
  $isWarning: false,
};

export default Input;
