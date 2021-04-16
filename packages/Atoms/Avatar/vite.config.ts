const path = require('path');

module.exports = {
  build: {
    outDir: './packages/Atoms/Avatar/dist',
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'Avatar',
      formats: ['es', 'cjs'],
      minify: false,
    },
    root: path.resolve(__dirname, './index.ts'),
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
