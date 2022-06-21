import { useEffect, useState } from 'react';
import { getBooks, getAlbums } from './services/fetch-utils';
import './App.css';
import BooksList from './BooksList';
import AlbumsList from './AlbumsList';
// import your arrays here

function App() {
  const [books, setBooks] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchBooksData() {
      const data = await getBooks();

      setBooks(data);
    }

    fetchBooksData();
  }, []);
  
  useEffect(() => {
    async function fetchAlbumsData() {
      const data = await getAlbums();

      setAlbums(data);
    }

    fetchAlbumsData();
  }, []);

  return (
    <div className="App">
      <h1>Books</h1>
      <BooksList books={books} />
      <h1>Albums</h1>
      <AlbumsList albums={albums} />
    </div>
  );
}

export default App;
