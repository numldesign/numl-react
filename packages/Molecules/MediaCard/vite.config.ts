const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'MediaCard',
      fileName: 'index',
      formats: ['es', 'cjs'],
      minify: false,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library

      external: [
        'react',
        '@numl-react/core',
        '@numl-react/atoms',
        '@numl-react/utility',
        '@numl-react/elements',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps

        globals: {
          react: 'React',
          '@numl-react/core': 'NumlReactCore',
          '@numl-react/atoms': 'NumlReactAtoms',
          '@numl-react/utility': 'NumlReactUtility',
          '@numl-react/elements': 'NumlReactElements',
        },
      },
    },
  },
};
