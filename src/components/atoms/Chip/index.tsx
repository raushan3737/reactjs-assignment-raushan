import styled from "@emotion/styled";
import { Chip as MuiChip, ThemeProvider } from "@mui/material";
import theme from "../../../utils/Theme/theme";
interface ChipProp {
  label: string;
}

const StyledChip = styled(MuiChip)((props: ChipProp) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    props.label === "CLEAR"
      ? theme.palette.background.paper
      : theme.palette.background.default,
  border: `1px solid ${theme.palette.background.paper}`,
  color:
    props.label === "CLEAR"
      ? theme.palette.success.light
      : theme.palette.success.main,
  borderRadius: "4px",
  gap: "10px",
  width: "6rem",
  height: "26px",
}));

const Chip = (props: ChipProp) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledChip label={props.label} />
    </ThemeProvider>
  );
};

export default Chip;
