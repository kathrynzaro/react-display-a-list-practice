import { client } from './client';

export async function getBooks() {
  const response = await client.from('books').select('*');

  return response.body;
}