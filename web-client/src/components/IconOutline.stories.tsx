import type { Meta, StoryObj } from "@storybook/react";

import IconOutline from "./IconOutline";
import { technologyIcons } from "../utils/uiHelpers";

const meta: Meta<typeof IconOutline> = {
  title: "Components/IconOutline",
  component: IconOutline,
};

export default meta;
type Story = StoryObj<typeof IconOutline>;

export const Default: Story = {
  render: () => (
    <IconOutline
      iconPath={technologyIcons.react.iconPath}
      borderColor={technologyIcons.react.borderColor}
      tooltipText={technologyIcons.react.tooltipText}
    />
  ),
};

export const Technologies: Story = {
  render: () => {
    return (
      <div
        className="d-flex flex-wrap"
        style={{ columnGap: "10px", rowGap: "10px" }}
      >
        {Object.entries(technologyIcons).map(([key, value]) => (
          <IconOutline
            key={value.tooltipText}
            iconPath={value.iconPath}
            borderColor={value.borderColor}
            tooltipText={value.tooltipText}
          />
        ))}
      </div>
    );
  },
};
