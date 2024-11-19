import OpenAPIClientAxios from 'openapi-client-axios'
import openapiRuntime from './openapi-runtime.json'
import type { Client as MostJsClient } from './openapi.ts'

const BASE_URL = 'https://api.the-most.ai'

interface CreateMostAIClientOptions {
  baseURL?: string
  username: string
  password: string
}

export async function createMostAIClient({
  baseURL,
  username,
  password,
}: CreateMostAIClientOptions) {
  const openapiClient = new OpenAPIClientAxios({
    definition: openapiRuntime,
    axiosConfigDefaults: {
      baseURL: baseURL || BASE_URL,
      auth: {
        username,
        password,
      },
    },
  })

  const client = await openapiClient.init<MostJsClient>()

  return client
}
