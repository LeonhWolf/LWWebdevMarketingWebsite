import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Views/Home/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Hero />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Hero />,
};
