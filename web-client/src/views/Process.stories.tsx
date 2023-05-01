import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Process from "./Process";

const meta: Meta<typeof Process> = {
  title: "Sections/Process",
  component: Process,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Process>;

export const DesktopDE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Process />,
};
export const DesktopEN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Process />,
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
  render: () => <Process />,
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
  render: () => <Process />,
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
  render: () => <Process />,
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
  render: () => <Process />,
};
