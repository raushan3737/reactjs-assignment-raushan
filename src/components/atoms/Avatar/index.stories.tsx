import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomAvatar from ".";
export default {
  title: "Components/atoms/Avatar",
  component: CustomAvatar,
  argTypes: {},
} as ComponentMeta<typeof CustomAvatar>;

const Template: ComponentStory<typeof CustomAvatar> = (args) => (
  <CustomAvatar {...args} />
);

export const AvatarStandard = Template.bind({});
AvatarStandard.args = {
  avatarImage:
    "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579",
    variant: 'rounded'
    
};