import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "Components/molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const StyledCard = Template.bind({});
StyledCard.args = {
  content: "Welcome to the card molecule",
};
