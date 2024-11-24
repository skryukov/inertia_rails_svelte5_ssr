import {createInertiaApp, type ResolvedComponent} from '@inertiajs/svelte'
import createServer from '@inertiajs/svelte/server'
import { render } from 'svelte/server'

createServer((page) =>
  createInertiaApp({
    page,
    resolve: (name) => {
      const pages = import.meta.glob<ResolvedComponent>('../pages/**/*.svelte', {
        eager: true,
      })
      const page = pages[`../pages/${name}.svelte`]
      if (!page) {
        console.error(`Missing Inertia page component: '${name}.svelte'`)
      }

      // To use a default layout, import the Layout component
      // and use the following line.
      // see https://inertia-rails.netlify.app/guide/pages#default-layouts
      //
      // return { default: page.default, layout: page.layout || Layout }

      return page
    },
    setup({ App, props }) {
      return render(App, { props })
    },
  }),
)