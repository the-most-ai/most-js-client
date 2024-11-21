import OpenAPIClientAxios from 'openapi-client-axios'
import openapiRuntime from './openapi-runtime.json'
import type { Client as OpenApiClient } from './openapi.ts'

const BASE_URL = 'https://api.the-most.ai'

interface CreateMostAIClientOptions {
  clientId: string
  clientSecret: string
  modelId?: string
  apiUrl?: string
}

class MostAiClient {
  private clientId: string
  private clientSecret: string
  private modelId?: string
  private accessToken?: string
  private apiUrl?: string
  public client?: OpenApiClient

  constructor(options: CreateMostAIClientOptions) {
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret
    this.modelId = options.modelId
    this.apiUrl = options.apiUrl || BASE_URL
  }

  async init() {
    const openapiClient = new OpenAPIClientAxios({
      definition: openapiRuntime,
      axiosConfigDefaults: {
        baseURL: this.apiUrl,
      },
    })

    const client = await openapiClient.init<OpenApiClient>()
    const { data: accessToken } = await client.auth(
      {},
      {
        client_id: this.clientId,
        client_secret: this.clientSecret,
      },
    )
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    this.client = client
    this.accessToken = accessToken

    return this.client
  }

  clone(): MostAiClient {
    const copyMostClient = new MostAiClient({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      modelId: this.modelId,
    })
    copyMostClient.client = this.client
    copyMostClient.accessToken = this.accessToken
    return copyMostClient
  }

  withModel(modelId: string): MostAiClient {
    const copyMostClient = new MostAiClient({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      modelId: modelId,
    })
    copyMostClient.client = this.client
    copyMostClient.accessToken = this.accessToken
    return copyMostClient
  }

  // async uploadAudio(file: File): Promise<AudioUpload> {
  //   if (!this.client) {
  //     throw new Error('Client is not initialized')
  //   }
  //   const { data } = await this.client.upload_audio(
  //     {
  //       client_id: this.clientId,
  //     },
  //     {
  //       audio_file: await file.arrayBuffer().then((buffer) => {
  //         const array = new Uint16Array(buffer)
  //         return array.map(String.fromCharCode) //String.fromCharCode.apply(null, [...array])
  //       }),
  //     },
  //   )
  //   return data
  // }
}

export async function createMostAIClient({
  clientId,
  clientSecret,
  modelId,
  apiUrl,
}: CreateMostAIClientOptions) {
  const mostAi = new MostAiClient({
    clientId,
    clientSecret,
    modelId,
    apiUrl,
  })
  await mostAi.init()
  if (!mostAi.client) {
    throw new Error('Error in client initialization')
  }
  return mostAi.client
}
