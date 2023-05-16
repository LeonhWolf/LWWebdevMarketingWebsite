import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import rocketIcon from "../assets/SVG/rocket-takeoff.svg";
import udemyLogo from "../assets/SVG/Udemy_logo.svg";
import mongoDbLogo from "../assets/PNG/mongo-db-logo.png";
import senacorLogo from "../assets/PNG/senacor-logo.png";
import leonhardWolfPortraitFrontal from "../assets/PNG/leonhardWolf-portrait-frontal.png";

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
    <div style={{ width: "400px" }}>
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
    <div style={{ width: "400px" }}>
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
    <div style={{ width: "400px" }}>
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
    <div style={{ width: "300px" }}>
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

export const LeftImage: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        leftImagePath={leonhardWolfPortraitFrontal}
      />
    </div>
  ),
};
export const LeftImageMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iPhone12Pro",
    },
  },
  render: () => (
    <div style={{ width: "400px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
        leftImagePath={leonhardWolfPortraitFrontal}
      />
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

export const InsertedBottomElementStretchedHeight: Story = {
  render: () => (
    <div style={{ width: "400px", height: "300px" }}>
      <Card
        title="Test Title"
        bodyText="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin"
      >
        <a href="#">some link</a>
      </Card>
    </div>
  ),
};
