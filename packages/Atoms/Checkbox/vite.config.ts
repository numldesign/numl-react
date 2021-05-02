// import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
// export default defineConfig({
//   // plugins: [reactRefresh()]
// })

// vite.config.js

const path = require('path');

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, './index'),
      name: 'Checkbox',
      fileName: 'core',
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
