# MostAi js Client

This is the package for interacting with the MostAi API.

## Installation

```
npm add most-js-client
```

## Usage

Example of how to use the client:

```
import { createMostApiClient } from 'most-js-client'

const client = await createMostApiClient({
  clientId: 'client_id',
  clientSecret: 'client_secret',
})

console.log('client', client)

export async function doWorkWithMostAi(file: File) {
  const models = await client.listModels()
  console.log(`Models fetched:`, models.data)
  const audioUpload = await client.uploadAudio('client_id', file)
  console.log(`Audio uploaded`, audioUpload.data)
}
```

Client uses axios under the hood, so you can use all the middleware that axios supports.

```
const {
  config,
  data,
  headers,
  status,
  statusText,
  request
} = await client.listModels()
```
