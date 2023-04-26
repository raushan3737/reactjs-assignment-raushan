import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PasswordTextField } from ".";



export default {
  title: "Components/molecules/PasswordTextField",
  component: PasswordTextField,
} as ComponentMeta<typeof PasswordTextField>;

const Template: ComponentStory<typeof PasswordTextField> = (args) => (
  <PasswordTextField {...args} />
);


export const PasswordField = Template.bind({});
PasswordField.args={
    placeholder: '*****',
}
