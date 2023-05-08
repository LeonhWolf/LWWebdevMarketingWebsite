import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Navbar />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Navbar />,
};
