import type { Meta, StoryObj } from "@storybook/react";

import type { IProps } from "./Card";
import Card from "./Card";
import rocketIcon from "../assets/SVG/rocket-takeoff.svg";
import postmanLogo from "../assets/PNG/postman-logo.png";
import typeScriptLogo from "../assets/PNG/typescript-logo.png";
import udemyLogo from "../assets/SVG/Udemy_logo.svg";
import mongoDbLogo from "../assets/PNG/mongo-db-logo.png";
import senacorLogo from "../assets/PNG/senacor-logo.png";

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
        titleColor="red"
      />
    </div>
  ),
};

export const SubtitleElement: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        subtitleElement={
          <div style={{ border: "solid 1px blue" }}>some subtitle text</div>
        }
      />
    </div>
  ),
};

export const HeaderImage: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        headerImagePath={senacorLogo}
      />
    </div>
  ),
};

export const TopIconSolid: Story = {
  render: () => (
    <div className="ms-42" style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleColor="green"
        topIconColor="blue"
        topIconPath={rocketIcon}
      />
    </div>
  ),
};
export const TopIconOutline: Story = {
  render: () => (
    <div className="ms-42" style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleColor="green"
        topIconStyle="outline"
        topIconColor="blue"
        topIconPath={udemyLogo}
      />
    </div>
  ),
};
export const TopIconTall: Story = {
  render: () => (
    <div className="ms-42" style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleColor="green"
        topIconStyle="outline"
        topIconColor="#10A94F"
        topIconPath={mongoDbLogo}
      />
    </div>
  ),
};
export const TopIconMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iPhone12Pro",
    },
  },
  render: () => (
    <div className="ms-42" style={{ width: "300px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        titleColor="green"
        topIconStyle="outline"
        topIconColor="#10A94F"
        topIconPath={mongoDbLogo}
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
export const bottomIconsWrap: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        bottomIcons={iconsWithPlaceholders}
      />
    </div>
  ),
};

export const bottomElementInserted: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        bottomIcons={iconsWithPlaceholders}
      >
        <a href="#">some link</a>
      </Card>
    </div>
  ),
};

export const BodyTextAndInsertedBottomElement: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
      >
        <a href="#">some link</a>
      </Card>
    </div>
  ),
};
