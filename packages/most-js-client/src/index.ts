import OpenAPIClientAxios from 'openapi-client-axios'
import openapiRuntime from './openapi-runtime.json'
import type { Client as OpenApiClient } from './openapi.ts'

const BASE_URL = 'https://api.the-most.ai'

interface MostAiClientOptions {
  modelId?: string
  apiUrl?: string
}

class MostAiClient {
  private modelId?: string
  private apiUrl?: string
  private accessToken?: string

  public client: OpenApiClient

  constructor(options: MostAiClientOptions) {
    this.modelId = options.modelId
    this.apiUrl = options.apiUrl || BASE_URL

    this.client = new OpenAPIClientAxios({
      definition: openapiRuntime,
      axiosConfigDefaults: {
        baseURL: this.apiUrl,
      },
    }).initSync<OpenApiClient>()
  }

  async authenticate(clientId: string, clientSecret: string) {
    const { data: accessToken } = await this.client.auth(
      {},
      {
        client_id: clientId,
        client_secret: clientSecret,
      },
    )
    this.accessToken = accessToken
    this.client.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    return this.client
  }

  clone(): MostAiClient {
    const copyMostClient = new MostAiClient({
      modelId: this.modelId,
    })
    copyMostClient.client = this.client
    copyMostClient.accessToken = this.accessToken
    return copyMostClient
  }

  withModel(modelId: string): MostAiClient {
    const copyMostClient = new MostAiClient({ modelId })
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

interface CreateMostAIClientOptions {
  clientId: string
  clientSecret: string
  modelId?: string
  apiUrl?: string
}

export async function createMostAIClient({
  clientId,
  clientSecret,
  modelId,
  apiUrl,
}: CreateMostAIClientOptions) {
  const mostAi = new MostAiClient({
    modelId,
    apiUrl,
  })
  await mostAi.authenticate(clientId, clientSecret)
  if (!mostAi.client) {
    throw new Error('Error in client initialization')
  }
  return mostAi.client
}
