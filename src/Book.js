import React from 'react';

export default function Book({ title, author, year_published, color }) {
  return (
    <div className='book' style={{ background: color }}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{year_published}</p>
    </div>
  );
}
