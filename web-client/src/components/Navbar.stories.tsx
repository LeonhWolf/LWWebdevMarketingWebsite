import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const DesktopDE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Navbar />,
};
export const DesktopEN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Navbar />,
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
  render: () => <Navbar />,
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
  render: () => <Navbar />,
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
  render: () => <Navbar />,
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
  render: () => <Navbar />,
};
