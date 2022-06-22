import { client } from './client.js';

export async function getBooks() {
  const response = await client.from('books').select('*');

  return response.data;
}

export async function getAlbums() {
  const response = await client.from('albums').select('*');

  return response.data;
}

export async function getMovies() {
  const response = await client.from('movies').select('*');

  return response.data;
}
