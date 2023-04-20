import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from ".";
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  title: "Components/atoms/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const GithubCustomIcon = Template.bind({});
GithubCustomIcon.args = {
  iconElement: <GitHubIcon />,
};
