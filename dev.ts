import { $ } from 'bun'

await Promise.all([
  $`cd packages/most-js-client && bun run dev`,
  $`cd playground/vite-html && bun run dev`,
])
