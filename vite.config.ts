import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  ssr: {
    // prebuilds ssr.js so we can drop node_modules from the resulting container
    noExternal: true,
  },
  plugins: [
    svelte(),
    RubyPlugin(),
  ],
})
