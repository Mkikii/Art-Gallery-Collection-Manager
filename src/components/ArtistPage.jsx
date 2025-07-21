import React from 'react';
import { useParams } from 'react-router-dom'; // I'll use useParams to get URL parameters (the artist's name).
import ArtworkCard from './ArtworkCard'; // I'll reuse the ArtworkCard component here to display the filtered artworks.

function ArtistPage({ artworks }) { // I expect to receive the full 'artworks' array to filter from it.
  // I'm extracting the 'name' parameter from the URL. 
  const { name: artistName } = useParams(); 
  
  // Decoded artistName if I encoded it in the Link.
  const decodedArtistName = decodeURIComponent(artistName);

  console.log(`ArtistPage: Displaying artworks for artist: ${decodedArtistName}`); // My own logging.

  // I'm filtering the entire 'artworks' array to find only the pieces by the current artist.
  const artworksByArtist = artworks.filter(
    artwork => artwork.artist === decodedArtistName
  );

  return (
    <section className="artist-page-container"> {/* Using a section for semantic grouping. */}
      <h2 className="artist-page-heading">Artworks by {decodedArtistName}</h2> {/* Displaying the artist's name. */}

      {artworksByArtist.length > 0 ? ( // I'm checking if I found any artworks for this artist.
        <div className="artist-artwork-grid"> {/* This div will hold the filtered artworks, styled as a grid. */}
          {artworksByArtist.map(artwork => (
            // Reusing ArtworkCard to display each of the artist's works.
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ) : (
        // If no artworks are found for the artist, I'll display a friendly message.
        <p className="no-artworks-message">No artworks found for {decodedArtistName} in our collection.</p>
      )}
    </section>
  );
}

// I need to export this component so App.jsx can render it based on the route.
export default ArtistPage;