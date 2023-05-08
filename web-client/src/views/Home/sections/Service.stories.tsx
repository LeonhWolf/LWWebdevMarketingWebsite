import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Service from "./Service";

const meta: Meta<typeof Service> = {
  title: "Views/Home/Service",
  component: Service,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Service>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Service />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Service />,
};
