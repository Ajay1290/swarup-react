import type { Preview } from "@storybook/react";
import centered from '@storybook/addon-centered/react';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    decorators: [
      (Story) => centered()
      ,
    ],  
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
