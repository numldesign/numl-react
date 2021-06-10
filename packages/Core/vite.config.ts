const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'NumlReact',
      fileName: 'index',
      formats: ['es', 'cjs'],
      minify: false,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundledvite build
      // into your library

      external: [
        'react',
        '@numl-react/core',
        '@numl-react/atoms',
        '@numl-react/molecules',
        '@numl-react/utility',
        '@numl-react/elements',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps

        globals: {
          react: 'React',
        },
      },
    },
  },
};
