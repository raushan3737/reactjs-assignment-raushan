import React from "react";
import { Button } from "@mui/material";

export interface CustomButtonProps {
  label: string;
  icon?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
}

const CustomButton = (props: CustomButtonProps) => {
  const { label, variant, size, onClick, style , icon} = props;
  return (
    <Button
      onClick={onClick}
      variant={variant}
      style={style}
      size={size}
      startIcon={icon}
      disableElevation
    >
      {label}
    </Button>
  );
};

export default CustomButton;
