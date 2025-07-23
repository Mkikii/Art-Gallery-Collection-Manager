import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    // This is the main navigation bar container. 
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-white text-2xl font-bold rounded-md px-3 py-2 hover:bg-gray-700 transition-colors">
          Art Gallery
        </Link>
        <div>
          
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors">
            Home
          </Link>
        
          <Link to="/artworks/new" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium ml-4 transition-colors">
            Add New Artwork
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
