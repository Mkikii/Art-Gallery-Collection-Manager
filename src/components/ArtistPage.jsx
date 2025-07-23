import React from 'react';
import { useParams } from 'react-router-dom'; 
import ArtworkCard from './ArtworkCard'; 
function ArtistPage({ artworks }) {  
  const { name: artistName } = useParams();

  const decodedArtistName = decodeURIComponent(artistName);

  
  const artworksByArtist = artworks.filter(
    artwork => artwork.artist === decodedArtistName
  );

  return (
 
    <section className="py-8">
      
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Artworks by {decodedArtistName}</h2>

     
      {artworksByArtist.length > 0 ? (
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
          {artworksByArtist.map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ) : (
        // If no artworks are found for the artist, I'll display a friendly message.
        <p className="text-center text-gray-600 text-lg">No artworks found for {decodedArtistName} in our collection.</p>
      )}
    </section>
  );
}


export default ArtistPage;
