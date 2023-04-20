import * as React from "react";
import { styled } from "@mui/material/styles";
import { Divider as MuiDivider } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

interface DividerProps {
  children: React.ReactNode | string;
  type?: "left" | "right";
  style?: React.CSSProperties;
}

const Divider = (props: DividerProps) => {
  return (
    <Root>
      <MuiDivider textAlign={props.type} style={props.style}>
        {props.children}
      </MuiDivider>
    </Root>
  );
};
export default Divider;
