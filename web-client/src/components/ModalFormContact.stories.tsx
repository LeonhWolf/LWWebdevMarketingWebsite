import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { open } from "../store/modalSlice";
import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import ModalFormContact from "./ModalFormContact";

const meta: Meta<typeof ModalFormContact> = {
  title: "Components/ModalFormContact",
  component: ModalFormContact,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ModalFormContact>;

function Wrapper() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(open());
  }, []);

  return <ModalFormContact />;
}

export const DE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => <Wrapper />,
};
export const EN: Story = {
  play: () => {
    i18next.changeLanguage("en");
  },
  render: () => <Wrapper />,
};
