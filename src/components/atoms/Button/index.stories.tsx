import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";
import theme from "../../../utils/Theme/theme";

export default {
  title: "Components/atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  label: "Sign in",
  variant: "contained",
  style: {
    backgroundColor: theme.palette.primary.main,
    width: 384,
    height: 44,
    borderRadius: 6,
    textTransform: "none",
  },
};

export const SignUp = Template.bind({});
SignUp.args = {
  ...SignIn.args,
  label: "Sign up",
};

