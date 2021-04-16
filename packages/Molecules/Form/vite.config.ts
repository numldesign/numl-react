const path = require('path');

module.exports = {
  build: {
    outDir: './packages/Molecules/Form/dist',
    lib: {
      entry: path.resolve(__dirname, './index'),
      name: 'Form',
      formats: ['es', 'cjs'],
      minify: false,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
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
