import { ComponentStory, ComponentMeta } from "@storybook/react";
import Divider from ".";
import Typography from "../../atoms/Typography";

export default {
  title: "Components/molecules/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const centreDivider = Template.bind({});
centreDivider.args = {
  children: <Typography text={"OR"} />,
};
