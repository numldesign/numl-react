import { configure } from '@storybook/react';

const req = require.context('../packages/', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
