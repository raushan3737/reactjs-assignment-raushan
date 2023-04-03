import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomTextField from ".";
import theme from "../../../utils/Theme/theme";

export default {
  title: "Components/atoms/TextField",
  component: CustomTextField,
} as ComponentMeta<typeof CustomTextField>;

const Template: ComponentStory<typeof CustomTextField> = (args) => (
  <CustomTextField {...args} />
);

export const Email = Template.bind({});
Email.args = {
  placeholder: "abc@gmail.com",
  style: {
    width: 384,
    borderRadius: 4,
    border: `1px solid ${theme.palette.secondary.light}`,
  },
};