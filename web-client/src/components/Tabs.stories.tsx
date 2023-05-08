import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";
import type { IProps as ITabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const exampleTabs: ITabs["tabs"] = [
  {
    id: "tab-1",
    title: "Tab 1",
    element: <div style={{ width: "50%", height: "50%" }}>content 1</div>,
  },
  {
    id: "tab-2",
    title: "Tab 2",
    element: <div style={{ width: "50%", height: "50%" }}>content 2</div>,
  },
];

export const OneTab: Story = {
  render: () => <Tabs tabs={exampleTabs.slice(0)} />,
};
export const TwoTabs: Story = {
  render: () => <Tabs tabs={exampleTabs} />,
};

export const ColoredBackground: Story = {
  render: () => (
    <div className="p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      <Tabs tabs={exampleTabs} />
    </div>
  ),
};
