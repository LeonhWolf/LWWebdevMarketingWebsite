import React from "react";
import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import "../src/i18n";
import "../src/App.scss";
import "../src/scss/full.scss";
import { store } from "../src/store";

interface IViewport {
  name: string;
  styles: {
    width: string;
    height: string;
  };
  type: "desktop" | "tablet" | "mobile";
}
interface ICustomViewports {
  iPhone12Pro: IViewport;
  iPadMini: IViewport;
}
const customViewports: ICustomViewports = {
  iPhone12Pro: {
    name: "iPhone 12 Pro",
    styles: {
      width: "390px",
      height: "844px",
    },
    type: "mobile",
  },
  iPadMini: {
    name: "iPad Mini",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: { ...MINIMAL_VIEWPORTS, ...customViewports } },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    </Provider>
  ),
];

export default preview;
