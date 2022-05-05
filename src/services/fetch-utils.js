import { checkError, client } from './client.js';

export async function getAvs() {
  const response = await client.from('avalanche').select('*');

  return checkError(response);
}
