import { createMostAIClient } from 'most-js-client'

const client = await createMostAIClient({
  clientId: '673605332b00397096f1aa73',
  clientSecret: 'pTRG6D1HCAHAmJOScq6Vsg$xrVS6ycG58P4yTBfRrdtwCVrQVbo/bb1vZcEYoRpMJ4',
})

export async function doWorkWithMostAi() {
  const models = await client.list_models()
  console.log(`Models fetched: ${models}`)
  const file = new File(['69', '1337'], 'test.mp3', { type: 'audio/mp3' })
  const audioUpload = await client.upload_audio(
    { client_id: '673605332b00397096f1aa73' },
    {
      audio_file: await file
        .arrayBuffer()
        .then((buffer) => String.fromCharCode(...new Uint16Array(buffer))),
    },
  )
  console.log(`Audio uploaded: ${audioUpload}`)
}
