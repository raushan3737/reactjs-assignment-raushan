import { Icon } from "@mui/material";
import React from "react";

interface CustomIconProps {
  iconElement: React.ReactNode;
}

const CustomIcon = (props: CustomIconProps) => {
  return <Icon >{props.iconElement}</Icon>;
};

export default CustomIcon;