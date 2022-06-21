import React from 'react';

export default function Album({ title, artist, year, color }) {
  return (
    <div className='album' style={{ background: color }}>
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{year}</p>
    </div>
  );
}

