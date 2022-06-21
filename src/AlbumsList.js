import React from 'react';
import Album from './Album';

export default function AlbumsList({ albums }) {
  return (
    <div className='albums-list'>
      {
        albums.map((album, i) => {
          return <Album
            {...album}
            key={album.title + i + album.id} />;
        })
      }
    </div>
  );
}

