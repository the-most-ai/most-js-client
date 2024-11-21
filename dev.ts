import { $ } from 'bun'

await $`cd packages/most-js-client && bun run generate-runtime`
await $`cd packages/most-js-client && bun run generate-types`
await Promise.all([
  $`cd packages/most-js-client && bun run dev`,
  $`cd playground/vite-html && bun run dev`,
])
