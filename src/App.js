import { useEffect, useState } from 'react';
import { getBooks, getAlbums, getMovies, getShows } from './services/fetch-utils';
import './App.css';
import BooksList from './BooksList';
import AlbumsList from './AlbumsList';
import MoviesList from './MoviesList';
import ShowsList from './ShowsList';
// import your arrays here

function App() {
  const [books, setBooks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

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
  
  useEffect(() => {
    async function fetchMoviesData() {
      const data = await getMovies();

      setMovies(data);
    }

    fetchMoviesData();
  }, []);
  
  useEffect(() => {
    async function fetchShowsData() {
      const data = await getShows();

      setShows(data);
    }

    fetchShowsData();
  }, []);

  return (
    <div className="App">
      <h1>Books</h1>
      <BooksList books={books} />
      <h1>Albums</h1>
      <AlbumsList albums={albums} />
      <h1>Movies</h1>
      <MoviesList movies={movies} />
      <h1>Shows</h1>
      <ShowsList shows={shows} />
    </div>
  );
}

export default App;
