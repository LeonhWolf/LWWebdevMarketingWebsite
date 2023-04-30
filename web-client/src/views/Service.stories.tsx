import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Service from "./Service";

const meta: Meta<typeof Service> = {
  title: "Sections/Service",
  component: Service,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Service>;

export const DesktopDE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Service />,
};
export const DesktopEN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Service />,
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
  render: () => <Service />,
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
  render: () => <Service />,
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
  render: () => <Service />,
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
  render: () => <Service />,
};
