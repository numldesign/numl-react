// .storybook/manager.js

import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme: theme,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
});
