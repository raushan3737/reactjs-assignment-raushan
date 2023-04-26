import {
  TextField,
  Card,
  Grid,
  styled,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Stack,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "../../../atoms/Button";
import Typography from "../../../atoms/Typography";
import Divider from "../../../molecules/Divider";
import { PasswordTextField } from "../../../molecules/PasswordTextField";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../../utils/Theme/theme";
import { SignInButton, SignInWithHandle } from "../../../molecules/IconButton";
import { ReactComponent as GoogleLogo } from "../../../../utils/assets/googleLogo.svg";

const SignIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterGrid container>
        <InnerGrid item>
          <InnerCard>
            <Typography text="Sign in" variant="body1" />
            <Typography
              text="Please enter your login credentials"
              variant="body2"
            />
            <Typography text="Email" variant="body2" />
            <TextField
              placeholder="rhernandez@gmail.com"
              style={{ marginBottom: "10px" }}
            />
            <Typography text="Password" variant="body2" />
            <PasswordTextField />
            <Stack direction={"row"} spacing={9} justifyContent="center">
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Typography text="Remember me" variant="body2" />}
                />
              </FormGroup>
              <Button
                label="Forgot password?"
                style={{
                  color: theme.palette.primary.main,
                  textTransform: "none",
                }}
              />
            </Stack>
            <SignInButton />
            <Divider children={<Typography text="or" variant="body2" />} />
            <SignInWithHandle
              label="Sign in with Google"
              startIcon={<GoogleLogo />}
            />
            <SignInWithHandle
              label="Sign in with Github"
              startIcon={<GitHubIcon />}
            />
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
            >
              <Typography text="Don't have an account?" variant="body2" />
              <Button
                label="Sign up"
                style={{
                  color: theme.palette.primary.main,
                  textTransform: "none",
                }}
              />
            </Stack>
          </InnerCard>
        </InnerGrid>
      </OuterGrid>
    </ThemeProvider>
  );
};

export default SignIn;

const OuterGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  marginTop: "4%",
  width: "100%",
});

const InnerGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "7%",
  marginRight: "7%",
});

const InnerCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  padding: "4%",
  width: "400px",
  height: "630px",
  boxShadow: " 0px 4px 28px rgba(45, 45, 47, 0.1)",
  borderRadius: "6px",
});
