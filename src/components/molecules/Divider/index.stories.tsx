import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomDivider from ".";
import CustomTypography from "../../atoms/Typography";


export default {
  title: "Components/molecules/Divider",
  component: CustomDivider,
} as ComponentMeta<typeof CustomDivider>;

const Template: ComponentStory<typeof CustomDivider> = (args) => (
  <CustomDivider {...args} />
);


export const centreDivider = Template.bind({});
centreDivider.args = {
  children: <CustomTypography text={"OR"}  />, 
}


