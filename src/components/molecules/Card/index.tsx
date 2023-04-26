import React from "react";
import { Card as MuiCard, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";

interface CardProps {
  content: React.ReactNode | string;
  style?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const { content, style } = props;
  return (
    <ThemeProvider theme={theme}>
      <MuiCard style={style}>{content}</MuiCard>
    </ThemeProvider>
  );
};

export default Card;
