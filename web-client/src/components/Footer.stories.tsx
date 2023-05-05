import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Footer />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Footer />,
};
