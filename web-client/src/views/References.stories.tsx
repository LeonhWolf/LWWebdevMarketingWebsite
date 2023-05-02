import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import References from "./References";

const meta: Meta<typeof References> = {
  title: "Sections/References",
  component: References,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof References>;

export const DesktopDE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <References />,
};
export const DesktopEN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <References />,
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
  render: () => <References />,
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
  render: () => <References />,
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
  render: () => <References />,
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
  render: () => <References />,
};
