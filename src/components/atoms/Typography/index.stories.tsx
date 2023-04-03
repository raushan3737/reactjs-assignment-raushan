import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomTypography from ".";
import theme from "../../../utils/Theme/theme";

export default {
  title: "Components/atoms/Typography",
  component:  CustomTypography,
} as ComponentMeta<typeof  CustomTypography>;

const Template: ComponentStory<typeof  CustomTypography> = (args) => (
  < CustomTypography {...args} />
);

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  text: "Text here",
  style: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    lineHeight: theme.typography.subtitle1.lineHeight,
  },
};

export const Body1 = Template.bind({});
Body1.args = {
  text: "Text here",
  style: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
  },
};

export const Caption = Template.bind({});
Caption.args = {
  text: "Text here",
  style: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.caption.fontWeight,
    lineHeight: theme.typography.caption.lineHeight,
  },
};