import React from "react";
import { Checkbox as MuiCheckbox, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";
interface CheckBoxProps {
  label?: string;
  checked?: boolean;
}

const CheckBox = (props: CheckBoxProps) => {
  const { label, checked } = props;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <MuiCheckbox id="checkbox" checked={checked} />
        <label htmlFor="checkbox">{label}</label>
      </div>
    </ThemeProvider>
  );
};

export default CheckBox;
