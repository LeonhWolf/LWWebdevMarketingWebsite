import type { Meta, StoryObj } from "@storybook/react";

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
    {
      key: "4",
      element: exampleCard,
    },
  ],
};

export const OneSlide: Story = {
  render: () => (
    <Carousel
      elements={exampleProps.elements.slice(0, 1)}
      elementsWidthPixels={exampleProps.elementsWidthPixels}
    />
  ),
};

export const TwoSlides: Story = {
  render: () => (
    <Carousel
      elements={exampleProps.elements.slice(0, 2)}
      elementsWidthPixels={exampleProps.elementsWidthPixels}
    />
  ),
};
export const ThreeSlides: Story = {
  render: () => (
    <Carousel
      elements={exampleProps.elements.slice(0, 3)}
      elementsWidthPixels={exampleProps.elementsWidthPixels}
    />
  ),
};
export const FourSlides: Story = {
  render: () => (
    <Carousel
      elements={exampleProps.elements.slice(0, 4)}
      elementsWidthPixels={exampleProps.elementsWidthPixels}
    />
  ),
};
export const FiveSlides: Story = {
  render: () => (
    <Carousel
      elements={exampleProps.elements.slice(0, 5)}
      elementsWidthPixels={exampleProps.elementsWidthPixels}
    />
  ),
};

const largeCard = (
  <div>
    <Card
      title="Teeeeeeeeeeeeeeeeeeeeeeeeest"
      bodyText="Teeeeeeeeeeeeeeeeeeeeeeeeest"
    />
  </div>
);
const largeCardProps: IProps = {
  elementsWidthPixels: 300,
  elements: [
    {
      key: "0",
      element: largeCard,
    },
    {
      key: "1",
      element: largeCard,
    },
    {
      key: "2",
      element: largeCard,
    },
    {
      key: "3",
      element: largeCard,
    },
    {
      key: "4",
      element: largeCard,
    },
  ],
};
export const WidthSmallMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    <Carousel
      elements={largeCardProps.elements}
      elementsWidthPixels={largeCardProps.elementsWidthPixels}
    />
  ),
};

const unequalHeightProps: IProps = {
  elementsWidthPixels: 300,
  elements: [
    {
      key: "0",
      element: <Card title="Test" bodyText="Test" />,
    },
    {
      key: "1",
      element: (
        <Card
          title="Teeeeeeeeeeeeeeeeeeeeeeeeest"
          bodyText="feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea"
        />
      ),
    },
    {
      key: "2",
      element: (
        <Card
          title="Teeeeeeeeeeeeeeeeeeeeeeeeest"
          bodyText="aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed"
        />
      ),
    },
  ],
};
export const UnequalHeightElements: Story = {
  render: () => (
    <Carousel
      elements={unequalHeightProps.elements}
      elementsWidthPixels={unequalHeightProps.elementsWidthPixels}
    />
  ),
};
