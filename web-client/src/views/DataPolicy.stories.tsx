import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import DataPolicy from "./DataPolicy";

const meta: Meta<typeof DataPolicy> = {
  title: "Views/DataPolicy",
  component: DataPolicy,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof DataPolicy>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <DataPolicy />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <DataPolicy />,
};
