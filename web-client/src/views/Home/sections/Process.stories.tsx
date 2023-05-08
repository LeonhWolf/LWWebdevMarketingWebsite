import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Process from "./Process";

const meta: Meta<typeof Process> = {
  title: "Views/Home/Process",
  component: Process,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Process>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Process />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Process />,
};
