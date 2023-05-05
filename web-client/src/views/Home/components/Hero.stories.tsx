import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const DesktopDE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Hero />,
};
export const DesktopEN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Hero />,
};

export const TabletDE: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iPadMini",
    },
  },
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Hero />,
};
export const TabletEN: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iPadMini",
    },
  },
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Hero />,
};

export const MobileDE: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iPhone12Pro",
    },
  },
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Hero />,
};
export const MobileEN: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iPhone12Pro",
    },
  },
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Hero />,
};
