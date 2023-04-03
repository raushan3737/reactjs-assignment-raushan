import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomIcon from ".";
import GitHubIcon from '@mui/icons-material/GitHub';


export default {
  title: "Components/atoms/Icon",
  component: CustomIcon,
  argTypes: {},
} as ComponentMeta<typeof CustomIcon>;

const Template: ComponentStory<typeof CustomIcon> = (args) => (
  <CustomIcon {...args} />
);


export const GoogleIconElement = Template.bind({});
GoogleIconElement.args = {
  iconElement: <img src="https://img.freepik.com/free-icon/search_318-265146.jpg" width="12.75"  alt="Loading icon"/>
};

export const GithubCustomIcon = Template.bind({});
GithubCustomIcon.args = {
    iconElement: <GitHubIcon /> 
};

 