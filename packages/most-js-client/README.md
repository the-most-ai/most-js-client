# Most.js Client

This is the package for interacting with the most.js API.

## Development

to create optimized for bundling openapi.json, run:

```
bunx openapicmd read --strip openapi_client_axios --format json openapi.json > src/openapi-runtime.json
```

and to generate the types, run:

```
bunx openapicmd typegen ./openapi.json > src/openapi.ts
```
