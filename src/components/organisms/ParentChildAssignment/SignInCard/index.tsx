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
import CustomButton from "../../../atoms/Button";
import CustomTypography from "../../../atoms/Typography";
import CustomDivider from "../../../molecules/Divider";
import { PasswordTextField } from "../../../molecules/PasswordTextField";
import { SignInButton, SignInWithHandle } from "../../../molecules/IconButton";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../../utils/Theme/theme";

const SignIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterGrid container>
        <InnerGrid item>
          <InnerCard>
            <CustomTypography text="Sign in" variant="body1" />
            <CustomTypography
              text="Please enter your login credentials"
              variant="body2"
            />
            <CustomTypography text="Email" variant="body2" />
            <TextField
              placeholder="rhernandez@gmail.com"
              style={{ marginBottom: "10px" }}
            />
            <CustomTypography text="Password" variant="body2" />
            <PasswordTextField />
            <Stack direction={"row"} spacing={9} justifyContent="center">
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <CustomTypography text="Remember me" variant="body2" />
                  }
                />
              </FormGroup>
              <CustomButton
                label="Forgot password?"
                style={{ color: "#224DFF", textTransform: "none" }}
              />
            </Stack>
            <SignInButton />
            <CustomDivider
              children={<CustomTypography text="or" variant="body2" />}
            />
            <SignInWithHandle
              label="Sign in with Google"
              icon={
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt="loading"
                  width={24}
                />
              }
            />
            <SignInWithHandle
              label="Sign in with Github"
              icon={<GitHubIcon />}
            />
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
            >
              <CustomTypography text="Don't have an account?" variant="body2" />
              <CustomButton
                label="Sign up"
                style={{ color: "#224DFF", textTransform: "none" }}
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
