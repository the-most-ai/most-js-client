import { createMostAIClient } from 'most-js-client'

const client = await createMostAIClient({
  clientId: '673605332b00397096f1aa73',
  clientSecret: 'pTRG6D1HCAHAmJOScq6Vsg$xrVS6ycG58P4yTBfRrdtwCVrQVbo/bb1vZcEYoRpMJ4',
})

console.log('client', await client.listModels())

console.log('client', await client.listAudios())

