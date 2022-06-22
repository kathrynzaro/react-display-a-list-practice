import React from 'react';

export default function Show({ title, year, color, streaming }) {
  return (
    <div className='show' style={{ background: color }}>
      <h3>{title}</h3>
      <p>{streaming}</p>
      <p>{year}</p>
    </div>
  );
}

