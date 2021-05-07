const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'Molecules',
      fileName: 'core',
      formats: ['es', 'cjs'],
      minify: false,
    },
    root: path.resolve(__dirname, './index.ts'),
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', '@numl-react/core'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          '@numl-react/core': 'NumlReactCore',
        },
      },
    },
  },
};
