import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";

interface TextFieldIconProps {
  icon: React.ReactNode;
  placeholder?: string;
  iconPosition?: "start" | "end";
  style?: React.CSSProperties;
}
const TextFieldIcon = (props: TextFieldIconProps) => {
  const { icon, iconPosition, placeholder } = props;
  return (
    <>
      {iconPosition === "start" ? (
        <TextField
          size="small"
          placeholder={placeholder}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="end">{icon}</IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <TextField
          size="small"
          placeholder={placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton edge="end">{icon}</IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
  );
};

export default TextFieldIcon;
