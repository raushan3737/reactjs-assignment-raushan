import React from "react";
import Typography from "@mui/material/Typography";

interface CustomTypographyProps {
  text: string;
  style?: React.CSSProperties;
}
const CustomTypography = (props: CustomTypographyProps) => {
  const { text, style } = props;
  return <Typography style={style}>{text}</Typography>;
};

export default CustomTypography;