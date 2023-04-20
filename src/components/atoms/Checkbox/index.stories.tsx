import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox from ".";

export default {
  title: "Components/atoms/Checkbox",
  component: CheckBox,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const CheckboxStandard = Template.bind({});
CheckboxStandard.args = {
  label: "Remember me",
  checked: true,
};

