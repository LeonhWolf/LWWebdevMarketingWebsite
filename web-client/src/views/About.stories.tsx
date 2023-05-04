import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import About from "./About";

const meta: Meta<typeof About> = {
  title: "Sections/About",
  component: About,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof About>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <About />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <About />,
};
