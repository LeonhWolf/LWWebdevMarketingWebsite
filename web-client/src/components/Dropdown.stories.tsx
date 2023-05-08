import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";
import type { IProps as IDropdown } from "./Dropdown";
import flagDe from "../assets/PNG/flag-de.png";
import flagUs from "../assets/PNG/flag-us.png";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const exampleTextItems: IDropdown["items"] = [
  {
    type: "text",
    id: "1",
    title: "Item 1",
  },
  {
    type: "text",
    id: "2",
    title: "Item 2",
  },
  {
    type: "text",
    id: "3",
    title: "Item 3",
  },
];
export const Text: Story = {
  render: () => <Dropdown items={exampleTextItems} onItemClick={() => {}} />,
};

const exampleTIconItems: IDropdown["items"] = [
  {
    type: "icon",
    id: "1",
    path: flagDe,
  },
  {
    type: "icon",
    id: "2",
    path: flagUs,
  },
];
export const Icons: Story = {
  render: () => <Dropdown items={exampleTIconItems} onItemClick={() => {}} />,
};
