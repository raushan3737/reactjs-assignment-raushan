import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField from ".";
import theme from "../../../utils/Theme/theme";

export default {
  title: "Components/atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
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
