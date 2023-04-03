import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomCard from ".";


export default {
  title: "Components/molecules/TextFieldIcon",
  component: CustomCard,
} as ComponentMeta<typeof CustomCard>;

const Template: ComponentStory<typeof CustomCard> = (args) => (
  <CustomCard {...args} />
);


export const Card = Template.bind({});
Card.args = {
  content: "Welcome to the card molecule"
}


