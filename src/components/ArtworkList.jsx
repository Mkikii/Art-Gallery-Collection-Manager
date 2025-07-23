import React from 'react';
import { Link } from 'react-router-dom'; 
import ArtworkCard from './ArtworkCard'; 

function ArtworkList({ artworks }) { 
  if (!artworks || artworks.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg">No artworks to display. Be the first to add one!</p>
        
        <Link to="/artworks/new" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md">
          Add New Artwork
        </Link>
      </div>
    );
  }

  return (
    // This section is the main container for my list of artworks.
    <section className="py-8">
     
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Our Current Collection</h2>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {artworks.map(artwork => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}


export default ArtworkList;
