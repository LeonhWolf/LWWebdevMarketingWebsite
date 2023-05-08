import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import References from "./References";

const meta: Meta<typeof References> = {
  title: "Views/Home/References",
  component: References,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof References>;

export const DE: Story = {
  play: async () => {
    await i18next.changeLanguage("de");
  },
  render: () => <References />,
};
export const EN: Story = {
  play: async () => {
    await i18next.changeLanguage("en");
  },
  render: () => <References />,
};
