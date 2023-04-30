import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import rocketIcon from "../assets/SVG/rocket-takeoff.svg";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const TitleAndBodyOnly: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
      />
    </div>
  ),
};
export const ColoredTitle: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleAndIconBackgroundColor="red"
      />
    </div>
  ),
};
export const IconAtTop: Story = {
  render: () => (
    <div className="ms-4" style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleAndIconBackgroundColor="blue"
        iconPath={rocketIcon}
      />
    </div>
  ),
};
