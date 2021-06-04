import { El, NumlProvider } from '@numl-react/core';
import React from 'react';
import { withContexts } from '@storybook/addon-contexts/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'Dark',
    list: [
      { name: 'Dark', value: 'dark', color: 'black' },
      { name: 'Light', value: 'light', color: 'white' },
    ],
    onChange: (obj) => {
      localStorage.setItem('theme', obj.value);
      var iframe = document.getElementsByTagName('iframe')[0];
      var elmnt =
        iframe.contentWindow.document.querySelector('[data-nu-scheme]');
      if (obj) {
        elmnt.dataset['nuScheme'] = obj.value;
      } else {
        elmnt.dataset['nuScheme'] = 'auto';
      }
    },
  },
};

function AppProviderWithKnobs({ theme, children }, context) {
  var customtheme = localStorage.getItem('theme');
  return (
    <NumlProvider theme={customtheme || 'dark'}>
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
  },
]);

export const decorators = [withContextsDecorator];
