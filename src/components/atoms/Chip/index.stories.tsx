import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StatusChip } from ".";

export default {
  title: "Components/atoms/Chip",
  component: StatusChip,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof StatusChip>;

const Template: ComponentStory<typeof StatusChip> = (args) => (
  <StatusChip {...args} />
);

export const clearChip = Template.bind({});
clearChip.args = {
  label: "CLEAR",
};

export const considerChip = Template.bind({});
considerChip.args = {
  label: "CONSIDER",
};
