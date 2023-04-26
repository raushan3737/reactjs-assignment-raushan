import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  title: "Components/atoms/Avatar",
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarStandard = Template.bind({});
AvatarStandard.args = {
  avatarIcon: <GitHubIcon />,
};
