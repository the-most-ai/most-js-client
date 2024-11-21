import { createMostAIClient } from 'most-js-client'

const client = await createMostAIClient({
  clientId: '67239029570a08554fc1f5a6',
  clientSecret: 'xzhn7B1jbA3B2LvXGsP4nw$sOaijZ.4i2eVOcqHpCL.pqn24mnx7v/HazFMJNhiwF0',
})

console.log('client', client)

export async function doWorkWithMostAi() {
  const models = await client.list_models()
  console.log(`Models fetched:`, models.data)
  const file = new File(['69', '1337'], 'test.mp3', { type: 'audio/mp3' })
  const formData = new FormData()
  formData.append('audio_file', file)
  const audioUpload = await client.upload_audio(
    { client_id: '673605332b00397096f1aa73' },
    // {
    //   audio_file: 'asd',
    // },
    formData,
  )

  console.log(`Audio uploaded: ${audioUpload}`)
}
