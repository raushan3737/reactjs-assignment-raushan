import React from "react";
import { Button as MuiButton, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";

interface ButtonProps {
  label: string;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, variant, size, onClick, style, startIcon, endIcon, disabled } =
    props;
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        style={style}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        disableElevation
      >
        {label}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
