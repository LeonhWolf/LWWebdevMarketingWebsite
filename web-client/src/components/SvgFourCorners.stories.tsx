import type { Meta, StoryObj } from "@storybook/react";

import SvgFourCorners from "./SvgFourCorners";

const meta: Meta<typeof SvgFourCorners> = {
  title: "Components/SvgFourCorners",
  component: SvgFourCorners,
};

export default meta;
type Story = StoryObj<typeof SvgFourCorners>;

export const LinePrimary: Story = {
  render: () => (
    <div style={{ width: "50vw", height: "50vh", border: "solid 1px black" }}>
      <SvgFourCorners
        type="line"
        fillColor="primary"
        thickness={50}
        coordinates={{ leftBottom: 0, rightTop: 0 }}
      />
    </div>
  ),
};
export const FreeShapeSecondary: Story = {
  render: () => (
    <div style={{ width: "50vw", height: "50vh", border: "solid 1px black" }}>
      <SvgFourCorners
        type="Free shape"
        fillColor="secondary"
        coordinates={{
          leftTop: 20,
          leftBottom: 0,
          rightBottom: 0,
          rightTop: 80,
        }}
      />
    </div>
  ),
};
