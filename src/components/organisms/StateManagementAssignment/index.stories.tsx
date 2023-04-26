import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CandidateTable from ".";

export default {
  title: "Components/organisms/Table",
  component: CandidateTable,
} as ComponentMeta<typeof CandidateTable>;

const Template: ComponentStory<typeof CandidateTable> = (args) => (
  <CandidateTable />
);

export const SampleTable = Template.bind({});
