import type { Meta, StoryObj } from "@storybook/react";

import Titles from "./Titles";

const meta: Meta<typeof Titles> = {
  title: "Components/Titles",
  component: Titles,
};

export default meta;
type Story = StoryObj<typeof Titles>;

export const LeftAligned: Story = {
  render: () => (
    <Titles
      smallTitle="Some Small Title"
      bigTitle="Some Big Title"
      doCenter={false}
    />
  ),
};

export const Centered: Story = {
  render: () => (
    <Titles
      smallTitle="Some Small Title"
      bigTitle="Some Big Title"
      doCenter={true}
    />
  ),
};
