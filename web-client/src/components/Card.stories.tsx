import type { Meta, StoryObj } from "@storybook/react";

import type { IProps } from "./Card";
import Card from "./Card";
import rocketIcon from "../assets/SVG/rocket-takeoff.svg";
import postmanLogo from "../assets/PNG/postman-logo.png";
import typeScriptLogo from "../assets/PNG/typescript-logo.png";

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
    <div className="ms-42" style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleAndIconBackgroundColor="blue"
        topIconPath={rocketIcon}
      />
    </div>
  ),
};

const iconsNoPlaceholder: IProps["bottomIcons"] = [
  {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
  },
  {
    iconPath: typeScriptLogo,
    borderColor: "#2D79C7",
  },
  {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
  },
  {
    iconPath: typeScriptLogo,
    borderColor: "#2D79C7",
  },
  {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
  },
  {
    iconPath: typeScriptLogo,
    borderColor: "#2D79C7",
  },
];
export const bottomIconsNoPlaceholder: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        bottomIcons={iconsNoPlaceholder}
      />
    </div>
  ),
};
const iconsWithPlaceholders: IProps["bottomIcons"] = [
  {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
    tooltipText: "Postman",
  },
  {
    iconPath: typeScriptLogo,
    borderColor: "#2D79C7",
    tooltipText: "TypeScript",
  },
  {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
    tooltipText: "Postman",
  },
  {
    iconPath: typeScriptLogo,
    borderColor: "#2D79C7",
    tooltipText: "TypeScript",
  },
  {
    iconPath: postmanLogo,
    borderColor: "#FF6C37",
    tooltipText: "Postman",
  },
  {
    iconPath: typeScriptLogo,
    borderColor: "#2D79C7",
    tooltipText: "TypeScript",
  },
];
export const bottomIconsWithPlaceholders: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        bottomIcons={iconsWithPlaceholders}
      />
    </div>
  ),
};

export const bottomIconsStretchedHeight: Story = {
  render: () => (
    <div style={{ width: "400px", height: "300px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        bottomIcons={iconsWithPlaceholders}
      />
    </div>
  ),
};
