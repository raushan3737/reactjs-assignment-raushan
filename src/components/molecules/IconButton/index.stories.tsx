import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SignInWithHandle } from ".";
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
  icon: (
    <img
      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
      alt="loading"
      width={24}
    />
  ),
};

export const SignInWithGithub = Template.bind({});
SignInWithGithub.args = {
  label: "Sign in with Github",
  icon: <GitHubIcon />,
};
