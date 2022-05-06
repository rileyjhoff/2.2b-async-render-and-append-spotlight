import { checkError, client } from './client.js';

export async function getAvs() {
  const response = await client.from('avalanche').select('*');

  return checkError(response);
}

export async function getDogs() {
  const response = await client.from('dog_breeds').select('*');

  return checkError(response);
}

export async function getRpg() {
  const response = await client.from('rpg_classes').select('*');

  return checkError(response);
}
