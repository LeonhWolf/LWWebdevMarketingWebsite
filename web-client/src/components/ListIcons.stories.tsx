import type { Meta, StoryObj } from "@storybook/react";

import ListIcons from "./ListIcons";
import type { IProps as IListIcons } from "./ListIcons";
import { technologyIcons } from "../utils/uiHelpers";
import type { ITechnologyIcons } from "../utils/uiHelpers";

const meta: Meta<typeof ListIcons> = {
  title: "Components/ListIcons",
  component: ListIcons,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ListIcons>;

const icons: IListIcons["icons"] = (
  Object.keys(technologyIcons) as Array<keyof ITechnologyIcons>
).map((technologyIcon) => ({
  iconPath: technologyIcons[technologyIcon].iconPath,
  borderColor: technologyIcons[technologyIcon].borderColor,
  tooltipText: technologyIcons[technologyIcon].tooltipText,
}));

export const ManyItems: Story = {
  render: () => (
    <div style={{ width: "1300px", border: "solid black 1px" }}>
      <ListIcons icons={icons.slice(0, 16)} />
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ width: "320px", border: "solid black 1px" }}>
      <ListIcons icons={icons} />
    </div>
  ),
};
