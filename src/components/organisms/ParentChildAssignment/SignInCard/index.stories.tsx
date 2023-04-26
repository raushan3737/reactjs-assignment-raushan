import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SignIn from ".";

export default {
  title: "Components/organisms/SignIn",
  component: SignIn,
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn />;

export const SignInCard = Template.bind({});