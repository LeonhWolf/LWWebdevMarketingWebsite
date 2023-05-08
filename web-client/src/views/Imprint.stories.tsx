import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Imprint from "./Imprint";

const meta: Meta<typeof Imprint> = {
  title: "Views/Imprint",
  component: Imprint,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Imprint>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Imprint />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Imprint />,
};
