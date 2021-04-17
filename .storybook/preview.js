// .storybook/preview.js

import { themes } from '@storybook/theming';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  docs: {
    theme: themes.dark,
  },
};
