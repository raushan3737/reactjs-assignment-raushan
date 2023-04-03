import React from "react";
import { Card } from "@mui/material";

interface CustomCardProps {
  content: React.ReactNode | string;
  style?: React.CSSProperties;
}

const CustomCard = (props: CustomCardProps) => {
  const { content, style } = props;
  return <Card style={style}>{content}</Card>;
};

export default CustomCard;
