import { createMostAIClient } from 'most-js-client'

const client = await createMostAIClient({
  username: 'gkasparyants@gmail.com',
  password: 'Qw123456',
})

console.log('client', await client.list_models_api_external_list_models_get())
