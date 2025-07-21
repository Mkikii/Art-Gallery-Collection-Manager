import React from 'react';
import { Link } from 'react-router-dom'; // I'll use Link from react-router-dom to create a navigation link.

function ArtworkCard({ artwork }) { // I expect to receive a single 'artwork' object as a prop.
  // I'll destructure the artwork object for easier access to its properties.
  const { id, title, artist, image } = artwork; 

  console.log(`ArtworkCard: Rendering artwork ID: ${id}, Title: ${title}`); // My own logging for debugging.

  return (
    <div className="artwork-card"> {/* This is the main container for a single artwork's display. */}
      <img src={image} alt={title} className="artwork-image" /> {/* Displaying the artwork's image. */}
      <div className="artwork-info"> {/* A div to group the title and artist info. */}
        <h3 className="artwork-title">{title}</h3> {/* Displaying the artwork's title. */}
        <p className="artwork-artist">
          Artist: {' '}
          {/* Making the artist's name a clickable link to their specific page.
              I'm using a template literal to construct the dynamic URL: /artists/The Artist's Name. */}
          <Link to={`/artists/${encodeURIComponent(artist)}`} className="artist-link">
            {artist}
          </Link>
        </p>
        {/* I could add more details here later if needed, like year, genre, etc. */}
      </div>
    </div>
  );
}

// I need to export this component so ArtworkList and ArtistPage can use it.
export default ArtworkCard;