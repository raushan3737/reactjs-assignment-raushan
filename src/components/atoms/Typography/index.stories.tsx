import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from ".";
import theme from "../../../utils/Theme/theme";
import { ThemeProvider } from "@mui/material";

export default {
  title: "Components/atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <ThemeProvider theme={theme}>
    <Typography {...args} />
  </ThemeProvider>
);

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  text: "Text here",
  variant: "subtitle1",
};

export const Body1 = Template.bind({});
Body1.args = {
  text: "Text here",
  variant: "body1",
};

