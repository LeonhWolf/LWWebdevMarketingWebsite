import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import NavbarFooterTemplate from "./NavbarFooterTemplate";

const meta: Meta<typeof NavbarFooterTemplate> = {
  title: "Templates/NavbarFooterTemplate",
  component: NavbarFooterTemplate,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof NavbarFooterTemplate>;

export const NavbarMargin: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => (
    <NavbarFooterTemplate doAddNavbarMargin={true}>
      <p>test text</p>
    </NavbarFooterTemplate>
  ),
};
export const NoNavbarMargin: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => (
    <NavbarFooterTemplate doAddNavbarMargin={false}>
      <div style={{ paddingTop: "100px", backgroundColor: "blue" }}>
        <p>test text</p>
      </div>
    </NavbarFooterTemplate>
  ),
};

export const StretchToBottom: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => (
    <div style={{ height: "100vh" }}>
      <NavbarFooterTemplate doAddNavbarMargin={true}>
        <p>test text</p>
      </NavbarFooterTemplate>
    </div>
  ),
};
