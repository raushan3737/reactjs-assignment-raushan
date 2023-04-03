import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
}

const CustomButton = (props: CustomButtonProps) => {
  const { label, variant, size, onClick, style } = props;
  return (
    <Button
      onClick={onClick}
      variant={variant}
      style={style}
      size={size}
      disableElevation
    >
      {label}
    </Button>
  );
};

export default CustomButton;
