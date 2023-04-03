import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomCheckBox from ".";

export default {
  title: "Components/atoms/Checkbox",
  component: CustomCheckBox,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CustomCheckBox>;

const Template: ComponentStory<typeof CustomCheckBox> = (args) => (
  <CustomCheckBox {...args} />
);

export const CheckboxStandard = Template.bind({});
CheckboxStandard.args = {
  label: 'Remember me' , 
  checked: true,

};