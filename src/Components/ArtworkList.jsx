import React from 'react';

const ArtworkList = ({ artworks }) => {
  return (
    <div>
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <h2>{artwork.title}</h2>
          <p>{artwork.artist}</p>
          <img src={artwork.image} alt={artwork.title} />
          <p>{artwork.theme}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtworkList;
