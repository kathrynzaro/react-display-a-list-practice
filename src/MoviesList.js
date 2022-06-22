import React from 'react';
import Movie from './Movie';

export default function MoviesList({ movies }) {
  return (
    <div className='movies-list'>
      {
        movies.map((movie, i) => {
          return <Movie
            {...movie}
            key={movie.title + i + movie.id} />;
        })
      }
    </div>
  );
}

