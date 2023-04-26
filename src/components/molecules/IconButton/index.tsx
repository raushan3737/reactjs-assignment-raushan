import theme from "../../../utils/Theme/theme";
import Button, { ButtonProps } from "../../atoms/Button";

export const SignInButton = () => {
  return (
    <Button style={SignInButtonStyle} variant="contained" label="Sign in" />
  );
};

export const SignInWithHandle = (props: ButtonProps) => {
  return (
    <Button
      label={props.label}
      startIcon={props.startIcon}
      style={SignInWithHandleStyle}
    />
  );
};

const SignInButtonStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: theme.palette.primary.main,
  width: "368px",
  height: "44px",
  borderRadius: 6,
  textTransform: "none",
  gap: "8px",
  marginTop: "12px",
  marginBottom: "30px",
};

const SignInWithHandleStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  color: "black",
  width: "368px",
  height: "44px",
  textTransform: "none",
  border: "1px solid #E5E7ED",
  gap: "8px",
  marginTop: "12px",
  marginBottom: "12px",
};
