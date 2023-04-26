import React from "react";
import { TextField as MuiTextField, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";

interface TextFieldProps {
  placeholder: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: () => React.ChangeEvent<HTMLInputElement>;
  InputProps?: any;
}

const TextField = (props: TextFieldProps) => {
  const { placeholder, style, onChange, InputProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        style={style}
        placeholder={placeholder}
        onChange={onChange}
        InputProps={InputProps}
      />
    </ThemeProvider>
  );
};

export default TextField;
