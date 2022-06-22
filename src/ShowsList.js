import React from 'react';
import Show from './Show';

export default function ShowsList({ shows }) {
  return (
    <div className='shows-list'>
      {
        shows.map((show, i) => {
          return <Show
            {...show}
            key={show.title + i + show.id} />;
        })
      }
    </div>
  );
}

