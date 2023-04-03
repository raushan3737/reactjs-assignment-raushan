import styled from "@emotion/styled";
import { Chip } from "@mui/material";

interface StatusChipProp {
  label: string;
}

const StyledChip = styled(Chip)((props: StatusChipProp) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: props.label === "CLEAR" ? "#F2FCFB" : "#FAF8EB",
  border: "1px solid #F2FCFB",
  color: props.label === "CLEAR" ? "#17A076" : "#A08817",
  borderRadius: "4px",
  gap: "10px",
  width: "6rem",
  height: "26px",
}));

export const StatusChip = (props: StatusChipProp) => {
  return <StyledChip label={props.label} />;
};
