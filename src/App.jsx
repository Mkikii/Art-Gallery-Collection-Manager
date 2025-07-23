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
        // This block always runs after the fetch operation completes, whether it succeeded or failed.
        setLoading(false); // I'm setting loading to false.
      });
  }, []); // The empty dependency array '[]' means this effect runs only once when the component mounts.

  // This function is passed down to the ArtworkForm component.
  // Its purpose is to allow the ArtworkForm to update this central 'artworks' state
  // immediately after a new artwork is successfully added to the backend.
  const handleAddArtwork = (newArtwork) => {
    // I'm updating the 'artworks' array by adding the 'newArtwork' to the existing list.
    // This makes the newly added artwork appear on the screen without needing to re-fetch all data.
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
        {/* I'm including the Navbar component here so it's visible on every page of my application. */}
        <Navbar />
        {/* This 'main' tag will contain the content that changes based on the current route. */}
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          {/* The 'Routes' component is where I define all my application's routes. */}
          <Routes>
           
            <Route path="/" element={<ArtworkList artworks={artworks} />} />

           
            <Route path="/artworks/new" element={<ArtworkForm onAddArtwork={handleAddArtwork} />} />

           
            <Route path="/artists/:name" element={<ArtistPage artworks={artworks} />} />

            {/* This is a catch-all route. If no other route matches the URL, I'll display a "Page Not Found" message. */}
            <Route path="*" element={<h2 className="text-center text-3xl mt-10 text-gray-700">404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
