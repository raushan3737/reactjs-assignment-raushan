import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldIcon from ".";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default {
  title: "Components/molecules/TextFieldIcon",
  component: TextFieldIcon,
} as ComponentMeta<typeof TextFieldIcon>;

const Template: ComponentStory<typeof TextFieldIcon> = (args) => (
  <TextFieldIcon {...args} />
);

export const SearchBar = Template.bind({});
SearchBar.args = {
  icon: <SearchSharpIcon />,
  placeholder: "Search any candidate",
  iconPosition: "start",
};
