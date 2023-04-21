import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chip from ".";

export default {
  title: "Components/atoms/Chip",
  component: Chip,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const clearChip = Template.bind({});
clearChip.args = {
  label: "CLEAR",
};

export const considerChip = Template.bind({});
considerChip.args = {
  label: "CONSIDER",
};
