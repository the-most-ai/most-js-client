import { MostClient } from './openApiClient'

interface CreateMostAIClientOptions {
  clientId: string
  clientSecret: string
}

export const createMostApiClient = async ({
  clientId,
  clientSecret,
}: CreateMostAIClientOptions) => {
  const client = new MostClient({})
  await client.authenticate(clientId, clientSecret)
  return client
}
