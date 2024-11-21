import OpenAPIClientAxios, { OperationResponse } from 'openapi-client-axios'
import openapiRuntime from './openapi-runtime.json'
import { AudioResult, Client, AudioUpload } from './backendTypes'

const BASE_URL = 'https://api.the-most.ai'

export interface MostAiClientOptions {
  clientId: string
  clientSecret: string
  modelId?: string
  apiUrl?: string
}

class OpenApiClient {
  private clientId: string
  private clientSecret: string

  private apiUrl?: string

  public client: Client

  constructor(options: MostAiClientOptions) {
    this.apiUrl = options.apiUrl || BASE_URL
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret

    this.client = new OpenAPIClientAxios({
      definition: openapiRuntime,
      axiosConfigDefaults: {
        baseURL: this.apiUrl,
      },
    }).initSync<Client>()
  }

  async authenticate() {
    const { data: accessToken } = await this.client.auth(
      {},
      { client_id: this.clientId, client_secret: this.clientSecret },
    )
    this.client.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    return this.client
  }
}

export class MostClient {
  private openApiClient: OpenApiClient
  private clientId: string
  private modelId?: string

  constructor(options: MostAiClientOptions) {
    this.openApiClient = new OpenApiClient(options)
    this.clientId = options.clientId
  }

  async authenticate() {
    await this.openApiClient.authenticate()
  }

  async listModels(): Promise<Array<{model: string}>> {
    const resp = await this.openApiClient.client.list_models()
    return resp.data
  }

  useModel(modelId: string) {
    this.modelId = modelId
  }

  async uploadAudio(audioFile: File): Promise<AudioUpload> {
    const formData = new FormData()
    formData.append('audio_file', audioFile)
    // @ts-ignore
    const resp = await this.openApiClient.client.upload_audio(this.clientId, formData)
    return resp.data
  }

  async listAudios(offset = 0, limit = 10): Promise<AudioUpload[]> {
    const resp = await this.openApiClient.client.list_audios({
      client_id: this.clientId,
      offset,
      limit,
    })
    return resp.data
  }

  async applyModel(audioId: string): Promise<AudioResult> {
    if (!this.modelId) {
      throw new Error('No model id provided')
    }
    const resp = await this.openApiClient.client.apply({
      client_id: this.clientId,
      audio_id: audioId,
      model_id: this.modelId,
    })
    return resp.data
  }

  async applyModelAsync(audioId: string) {
    throw new Error('Not implemented yet')
    /*
    const resp = await this.openApiClient.client.apply_async({
      client_id: this.clientId,
      audio_id: audioId,
      model_id: this.modelId,
    })
    return resp.data
     */
  }

  async fetchResults(audioId: string): Promise<AudioResult> {
    if (!this.modelId) {
      throw new Error('No model id provided')
    }
    const resp = await this.openApiClient.client.fetch_results({
      client_id: this.clientId,
      audio_id: audioId,
      model_id: this.modelId,
    })
    return resp.data
  }

  async fetchText(audioId: string): Promise<AudioResult> {
    if (!this.modelId) {
      throw new Error('No model id provided')
    }
    const resp = await this.openApiClient.client.fetch_text({
      client_id: this.clientId,
      audio_id: audioId,
      model_id: this.modelId,
    })
    return resp.data
  }
}
