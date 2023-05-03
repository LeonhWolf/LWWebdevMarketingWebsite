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
