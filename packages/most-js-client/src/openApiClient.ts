import OpenAPIClientAxios from 'openapi-client-axios'
import openapiRuntime from './openapi-runtime.json'
import { Client } from './backendTypes'

const BASE_URL = 'https://api.the-most.ai'

export interface MostAiClientOptions {
  modelId?: string
  apiUrl?: string
}

class OpenApiClient {
  private apiUrl?: string

  public client: Client

  constructor(options: MostAiClientOptions) {
    this.apiUrl = options.apiUrl || BASE_URL

    this.client = new OpenAPIClientAxios({
      definition: openapiRuntime,
      axiosConfigDefaults: {
        baseURL: this.apiUrl,
      },
    }).initSync<Client>()
  }

  async authenticate(clientId: string, clientSecret: string) {
    const { data: accessToken } = await this.client.auth(
      {},
      { client_id: clientId, client_secret: clientSecret },
    )
    this.client.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    return this.client
  }
}

export class MostClient {
  private openApiClient: OpenApiClient

  constructor(options: MostAiClientOptions) {
    this.openApiClient = new OpenApiClient(options)
  }

  async authenticate(clientId: string, clientSecret: string) {
    await this.openApiClient.authenticate(clientId, clientSecret)
  }

  listModels() {
    return this.openApiClient.client.list_models()
  }

  uploadAudio(clientId: string, audioFile: File) {
    const formData = new FormData()
    formData.append('audio_file', audioFile)
    return this.openApiClient.client.upload_audio(clientId, formData)
  }

  listAudios(clientId: string, offset = 0, limit = 10) {
    return this.openApiClient.client.list_audios({
      client_id: clientId,
      offset,
      limit,
    })
  }

  applyModel(clientId: string, audioId: string, modelId: string) {
    return this.openApiClient.client.apply({
      client_id: clientId,
      audio_id: audioId,
      model_id: modelId,
    })
  }

  applyModelAsync(clientId: string, audioId: string, modelId: string) {
    return this.openApiClient.client.apply_async({
      client_id: clientId,
      audio_id: audioId,
      model_id: modelId,
    })
  }

  fetchResults(clientId: string, audioId: string, modelId: string) {
    return this.openApiClient.client.fetch_results({
      client_id: clientId,
      audio_id: audioId,
      model_id: modelId,
    })
  }

  fetchText(clientId: string, audioId: string, modelId: string) {
    return this.openApiClient.client.fetch_text({
      client_id: clientId,
      audio_id: audioId,
      model_id: modelId,
    })
  }
}
