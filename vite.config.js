import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000, // Adjust the limit according to your needs

    // Use manualChunks to specify custom chunking rules
    rollupOptions: {
      output: {
        manualChunks(id) {
          // You can define your own rules here based on the dependencies or file paths
          if (id.includes('node_modules')) {
            return 'vendor'; // This will create a 'vendor' chunk for node_modules
          }
        },
      },
    },
  },
});
