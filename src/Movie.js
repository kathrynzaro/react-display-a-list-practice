import React from 'react';

export default function Movie({ title, director, year, color }) {
  return (
    <div className='movie' style={{ background: color }}>
      <h3>{title}</h3>
      <p>{director}</p>
      <p>{year}</p>
    </div>
  );
}

