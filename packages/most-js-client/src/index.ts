import OpenAPIClientAxios from 'openapi-client-axios'
import openapiRuntime from './openapi-runtime.json'
import type { Client as MostJsClient, AudioUpload, AudioResult } from './openapi.ts'

const BASE_URL = 'https://api.the-most.ai'

interface CreateMostAIClientOptions {
  clientId: string
  clientSecret: string
  modelId?: string
}


class MostClient {
  private clientId: string
  private clientSecret: string
  private modelId?: string
  private accessToken?: string

  private client?: MostJsClient

  constructor(options: CreateMostAIClientOptions) {
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret
    this.modelId = options.modelId
  }

  async init() {
    const openapiClient = new OpenAPIClientAxios({
      definition: openapiRuntime,
      axiosConfigDefaults: {
        baseURL: BASE_URL
      },
    })

    const client = await openapiClient.init<MostJsClient>()
    const accessToken = (await client.auth({}, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
    })).data

    this.client = client
    this.accessToken = accessToken
  }

  async listModels() {
    if (!this.client) {
      throw new Error('Client is not initialized')
    }
    return (await this.client.list_models({}, {}, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })).data
  }

  async listAudios(): Promise<AudioUpload[]> {
    if (!this.client) {
      throw new Error('Client is not initialized')
    }
    return (await this.client.list_audios({
      client_id: this.clientId,
    }, {}, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })).data
  }

  clone(): MostClient {
    const copyMostClient = new MostClient({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      modelId: this.modelId,
    })
    copyMostClient.client = this.client
    copyMostClient.accessToken = this.accessToken
    return copyMostClient
  }

  withModel(modelId: string): MostClient {
    const copyMostClient = new MostClient({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      modelId: modelId,
    })
    copyMostClient.client = this.client
    copyMostClient.accessToken = this.accessToken
    return copyMostClient
  }

  async uploadAudio(f: File): Promise<AudioUpload> {
    if (!this.client) {
      throw new Error('Client is not initialized')
    }
    return (await this.client.upload_audio({
      client_id: this.clientId,
    }, {
      audio_file: await f.arrayBuffer().then((buf) => {
        const arr = new Uint16Array(buf)
        return String.fromCharCode.apply(null, [...arr])
      }),
    }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })).data
  }
}

export async function createMostAIClient({
  clientId,
  clientSecret,
  modelId,
}: CreateMostAIClientOptions) {
  const client = new MostClient({
    clientId,
    clientSecret,
    modelId,
  })
  await client.init()
  return client;
}

