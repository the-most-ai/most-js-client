import { createMostApiClient } from 'most-js-client'

const client = await createMostApiClient({
  clientId: '67239029570a08554fc1f5a6',
  clientSecret: 'xzhn7B1jbA3B2LvXGsP4nw$sOaijZ.4i2eVOcqHpCL.pqn24mnx7v/HazFMJNhiwF0',
})

console.log('client', client)

export async function doWorkWithMostAi(file: File) {
  const models = await client.listModels()
  console.log(`Models fetched:`, models.data)
  const audioUpload = await client.uploadAudio('67239029570a08554fc1f5a6', file)
  console.log(`Audio uploaded`, audioUpload.data)
  const applyModel = await client.applyModel(
    '67239029570a08554fc1f5a6',
    audioUpload.data.id,
    models.data[0].model,
  )
  console.log(`Model applied`, applyModel.data)
}
