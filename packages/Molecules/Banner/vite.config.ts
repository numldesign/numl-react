const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, './index'),
      name: 'Banner',
      fileName: 'core',
      formats: ['es', 'cjs'],
      minify: false,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', '@numl-react/core', '@numl-react/atoms', '@numl-react/utility'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          '@numl-react/core': 'NumlReactCore',
          '@numl-react/atoms': 'NumlReactAtoms',
          '@numl-react/utility': 'NumlReactUtility',
        },
      },
    },
  },
};
