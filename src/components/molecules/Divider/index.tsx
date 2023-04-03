import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

interface CustomDividerProps {
  children: React.ReactNode | string;
  type?:'left' | 'right'; 
}

export default function CustomDivider(props: CustomDividerProps) {
  return (
    <Root>
      <Divider textAlign={props.type} style={{margin: '10px'}} >{props.children}</Divider>
    </Root>
  );
}

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));