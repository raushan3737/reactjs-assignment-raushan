import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SignInWithHandle } from ".";
import { ReactComponent as GoogleLogo } from "../../../utils/assets/googleLogo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  title: "Components/molecules/SignInWith",
  component: SignInWithHandle,
} as ComponentMeta<typeof SignInWithHandle>;

const Template: ComponentStory<typeof SignInWithHandle> = (args) => (
  <SignInWithHandle {...args} />
);

export const SignInWithGoogle = Template.bind({});
SignInWithGoogle.args = {
  label: "Sign in with Google",
  startIcon: <GoogleLogo />,
};

export const SignInWithGithub = Template.bind({});
SignInWithGithub.args = {
  label: "Sign in with Github",
  startIcon: <GitHubIcon />,
};
