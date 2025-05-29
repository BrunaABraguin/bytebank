import React from "react";
import "../src/app/globals.css";
import { Preview } from "@storybook/react";
import { AppProvider } from "../src/context/AppContext";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
};

export default preview;
