module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  test: /\.(ts|tsx)$/,
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    '@storybook/preset-create-react-app',
  ],
  exclude: [
    /node_modules/,
    '/packages/**/*/*.test.ts',
    '/packages/**/*/*.test.tsx',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, '../packages/'),
      'node_modules',
    ];

    return config;
  },
};
