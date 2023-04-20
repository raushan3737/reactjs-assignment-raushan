import React from "react";
import { Typography as MuiTypography, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";

interface TypographyProps {
  text: string;
  style?: React.CSSProperties;
  variant?:
    | "body1"
    | "body2"
    | "h1"
    | "h2"
    | "subtitle1"
    | "subtitle2"
    | "caption";
}
const Typography = (props: TypographyProps) => {
  const { text, style, variant } = props;
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography style={style} variant={variant}>
        {text}
      </MuiTypography>
    </ThemeProvider>
  );
};

export default Typography;
