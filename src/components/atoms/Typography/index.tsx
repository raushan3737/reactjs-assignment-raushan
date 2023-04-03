import React from "react";
import Typography from "@mui/material/Typography";
import theme from "../../../utils/Theme/theme";
import { ThemeProvider } from "@emotion/react";

interface CustomTypographyProps {
  text: string;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  style?: React.CSSProperties;
}
const CustomTypography = (props: CustomTypographyProps) => {
  const { text, style, variant } = props;
  return (
    <ThemeProvider theme={theme}>
      <Typography style={style} variant={variant}>
        {text}
      </Typography>
    </ThemeProvider>
  );
};

export default CustomTypography;
