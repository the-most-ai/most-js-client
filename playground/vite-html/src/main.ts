import { createMostApiClient } from 'most-js-client'

const client = await createMostApiClient({
  clientId: '67239029570a08554fc1f5a6',
  clientSecret: 'xzhn7B1jbA3B2LvXGsP4nw$sOaijZ.4i2eVOcqHpCL.pqn24mnx7v/HazFMJNhiwF0',
})

console.log('client', client)

export async function doWorkWithMostAi(file: File) {
  const models = await client.listModels()
  console.log(`Models fetched:`, models)
  client.useModel(models[0].model)
  const audioUpload = await client.uploadAudio(file)
  console.log(`Audio uploaded`, audioUpload)
  const applyModel = await client.applyModel(
    audioUpload.id,
  )
  console.log(`Model applied`, applyModel)
}
