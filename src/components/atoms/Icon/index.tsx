import React from "react";
import { Icon as MuiIcon, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";

interface IconProps {
  iconElement: React.ReactNode;
}

const Icon = (props: IconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiIcon>{props.iconElement}</MuiIcon>
    </ThemeProvider>
  );
};

export default Icon;
