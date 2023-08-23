// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
// import CustomTheme from './CustomTheme'; // You can create your own custom theme component

addons.setConfig({
  theme: themes.dark, // You can use themes.dark, themes.light, or your CustomTheme
});
