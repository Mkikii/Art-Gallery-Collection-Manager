import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import ArtworkList from './components/ArtworkList';
import ArtworkForm from './components/ArtworkForm';
import ArtistPage from './components/ArtistPage';

function App() {
 
  const [artworks, setArtworks] = useState([]);
  // I'm using these states to show a loading message while data is being fetched.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true); // I'm setting loading to true to indicate that data fetching has started.
   
    fetch('http://localhost:3000/artworks')
      .then(response => {
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        return response.json(); // I'm parsing the JSON data from the response.
      })
      .then(data => {
        setArtworks(data); // If successful, I'm updating my 'artworks' state with the fetched data.
      })
      
      .finally(() => {
       
        setLoading(false); // I'm setting loading to false.
      });
  }, []); // The empty dependency array '[]' means this effect runs only once when the component mounts.

 

  const handleAddArtwork = (newArtwork) => {
    // I'm updating the 'artworks' array by adding the 'newArtwork' to the existing list.
    
    setArtworks(prevArtworks => [...prevArtworks, newArtwork]);
  };

  // I'm rendering different content based on the application's current state (loading, error, or data ready).
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-2xl font-semibold text-gray-700">Loading artworks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    // I'm wrapping my entire application with 'BrowserRouter' to enable client-side routing.
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
     
        <Navbar />
        
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          
          <Routes>
           
            <Route path="/" element={<ArtworkList artworks={artworks} />} />

           
            <Route path="/artworks/new" element={<ArtworkForm onAddArtwork={handleAddArtwork} />} />

           
            <Route path="/artists/:name" element={<ArtistPage artworks={artworks} />} />

           
            <Route path="*" element={<h2 className="text-center text-3xl mt-10 text-gray-700">404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
