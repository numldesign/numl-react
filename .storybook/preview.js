import { El, NumlProvider } from '@numl-react/core';
import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { color, withKnobs } from '@storybook/addon-knobs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

function AppProviderWithKnobs({ theme, children }, context) {
  return (
    <NumlProvider theme={theme}>
      <El.ThemeProvider hue="290" saturation="75" />
      <El.ThemeProvider name="secondary" hue="240" saturation="75" />
      {children}
    </NumlProvider>
  );
}

const withContextsDecorator = withContexts([
  {
    title: 'Color scheme',
    components: [AppProviderWithKnobs],
    params: [
      {
        default: true,
        name: 'Light Mode',
        props: { theme: 'light' },
      },
      {
        name: 'Dark Mode',
        props: { theme: 'dark' },
      },
    ],
  },
]);

export const decorators = [withContextsDecorator];
