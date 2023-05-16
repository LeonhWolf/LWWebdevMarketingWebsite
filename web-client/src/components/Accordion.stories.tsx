import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./Accordion";
import type { IProps as IAccordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionItems: IAccordion["items"] = [
  {
    id: "item-1",
    title: "Title of Item 1",
    element: <div>Content of item 1</div>,
  },
  {
    id: "item-2",
    title: "Title of Item 2",
    element: <div style={{ height: "100px" }}>Content of item 2</div>,
  },
  {
    id: "item-3",
    title: "Title of Item 3",
    element: <div style={{ height: "200px" }}>Content of item 3</div>,
  },
];

export const OneItem: Story = {
  render: () => <Accordion items={accordionItems.slice(0, 1)} />,
};

export const TwoItems: Story = {
  render: () => <Accordion items={accordionItems.slice(0, 2)} />,
};

export const ThreeItems: Story = {
  render: () => <Accordion items={accordionItems} />,
};
