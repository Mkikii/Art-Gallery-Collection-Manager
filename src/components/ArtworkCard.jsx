import React from 'react';
import { Link } from 'react-router-dom'; 

function ArtworkCard({ artwork }) { 
  const { id, title, artist, image } = artwork;

  return (
    // This div is the container for each individual artwork card. 
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
     
      <img src={image} alt={title} className="w-full h-48 object-cover object-center" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/CCCCCC/333333?text=Image+Not+Found"; }} />
      <div className="p-4 flex-grow flex flex-col justify-between">
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          Artist: {' '}
         
          <Link to={`/artists/${encodeURIComponent(artist)}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            {artist}
          </Link>
        </p>
      </div>
    </div>
  );
}


export default ArtworkCard;
