import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomButton from ".";
import theme from "../../../utils/Theme/theme";


export default {
  title: "Components/atoms/Button",
  component: CustomButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

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

