import React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
  placeholder: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: () => React.ChangeEvent<HTMLInputElement>;
  InputProps?: any;
}

const CustomTextField = (props: CustomTextFieldProps) => {
  const { placeholder, style, onChange, InputProps } = props;

  return (
    <TextField
      style={style}
      placeholder={placeholder}
      onChange={onChange}
      InputProps={InputProps}
    />
  );
};

export default CustomTextField;
