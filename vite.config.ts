import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';

const pocketbase_url = 'http://localhost:8090';

export default defineConfig({
  plugins: [Unocss(), sveltekit()],
  server: {
    proxy: {
      // proxy "/api" and "/_" to pocketbase_url
      '/api': pocketbase_url,
      // Conflicts with uno.css
      // '/_': pocketbase_url,
    },
  },
});
