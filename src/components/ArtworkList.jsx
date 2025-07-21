import React from 'react';
import ArtworkCard from './ArtworkCard'; // I'll import the ArtworkCard component here, as I'll be using it to display each artwork.

function ArtworkList({ artworks }) { // I expect to receive an 'artworks' array as a prop from my parent component App.jsx.
  console.log("ArtworkList: Received artworks", artworks); // My own logging to see what data I'm getting.

  if (!artworks || artworks.length === 0) {
    return <p>No artworks to display. Maybe add some new pieces!</p>; // A helpful message if there are no artworks.
  }

  return (
    <section className="artwork-list-container"> {/* I'm using a section for semantic HTML */}
      <h2 className="list-heading">Our Current Collection</h2>
      <div className="artwork-grid"> {/* This div will hold all my individual ArtworkCards, and I'll style it as a grid. */}
        {artworks.map(artwork => (
          // I'm iterating over the 'artworks' array. For each 'artwork' object, I'll render an ArtworkCard.
          // The 'key' prop is crucial for React's efficiency when rendering lists! I'll use artwork.id.
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}

// I need to export this component so other parts of the application can use it.
export default ArtworkList;