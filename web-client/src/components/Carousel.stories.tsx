import type { Meta, StoryObj } from "@storybook/react";
import i18next from "i18next";

import Carousel from "./Carousel";
import type { IProps } from "./Carousel";
import Card from "./Card";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const exampleCard = (
  <div>
    <Card title="Test Title" bodyText="lorem ipsum 123123" />
  </div>
);
const exampleProps: IProps = {
  elementsWidthPixels: 300,
  elements: [
    {
      key: "0",
      element: exampleCard,
    },
    {
      key: "1",
      element: exampleCard,
    },
    {
      key: "2",
      element: exampleCard,
    },
    {
      key: "3",
      element: exampleCard,
    },
  ],
};

export const DesktopDE: Story = {
  play: () => {
    i18next.changeLanguage("de");
  },
  render: () => (
    <Carousel
      elements={exampleProps.elements}
      elementsWidthPixels={exampleProps.elementsWidthPixels}
    />
  ),
};
// export const DesktopEN: Story = {
//   play: () => {
//     i18next.changeLanguage("en");
//   },
//   render: () => <Carousel elements={exampleProps.elements} />,
// };

// export const TabletDE: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: "iPadMini",
//     },
//   },
//   play: () => {
//     i18next.changeLanguage("de");
//   },
//   render: () => <Carousel elements={exampleProps.elements} />,
// };
// export const TabletEN: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: "iPadMini",
//     },
//   },
//   play: () => {
//     i18next.changeLanguage("en");
//   },
//   render: () => <Carousel elements={exampleProps.elements} />,
// };

// export const MobileDE: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: "iPhone12Pro",
//     },
//   },
//   play: () => {
//     i18next.changeLanguage("de");
//   },
//   render: () => <Carousel elements={exampleProps.elements} />,
// };
// export const MobileEN: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: "iPhone12Pro",
//     },
//   },
//   play: () => {
//     i18next.changeLanguage("en");
//   },
//   render: () => <Carousel elements={exampleProps.elements} />,
// };
