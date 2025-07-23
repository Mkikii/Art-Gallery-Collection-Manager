
import React, { useState, useEffect } from 'react'; // I'm importing React hooks for state and side effects.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // I'm importing routing components to manage different pages.

// I'm importing all my individual components from the 'components' folder.
import Navbar from './components/Navbar';
import ArtworkList from './components/ArtworkList';
import ArtworkForm from './components/ArtworkForm';
import ArtistPage from './components/ArtistPage';

function App() {
  // I'm setting up state to hold all my artwork data. This will be the central source of truth.
  const [artworks, setArtworks] = useState([]);
  // I'm using these states to show a loading message while data is being fetched, or an error if something goes wrong.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This 'useEffect' hook runs once when my application first loads.
  // Its purpose is to fetch the initial list of artworks from my json-server API.
  useEffect(() => {
    setLoading(true); // I'm setting loading to true to indicate that data fetching has started.
    // I'm making a GET request to my json-server. It's expected to be running on port 3000.
    fetch('http://localhost:3000/artworks')
      .then(response => {
        // I'm checking if the network response was successful (status code 200-299).
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // If not, I'm throwing an error.
        }
        return response.json(); // I'm parsing the JSON data from the response.
      })
      .then(data => {
        setArtworks(data); // If successful, I'm updating my 'artworks' state with the fetched data.
      })
      .catch(err => {
        // If any error occurs during the fetch (e.g., network issue, server error), I'm catching it.
        console.error("Failed to fetch artworks:", err);
        setError(err.message); // I'm setting the error state to display a message to the user.
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
            {/* This is my home page route. When the URL is '/', I'll render the ArtworkList component.
                I'm passing the 'artworks' data to it so it can display all the art pieces. */}
            <Route path="/" element={<ArtworkList artworks={artworks} />} />

            {/* This is the route for adding a new artwork. When the URL is '/artworks/new', I'll render the ArtworkForm.
                I'm passing my 'handleAddArtwork' function to it so the form can update the main artwork list. */}
            <Route path="/artworks/new" element={<ArtworkForm onAddArtwork={handleAddArtwork} />} />

            {/* This is the dynamic route for an artist's page. The ':name' part means it will capture whatever is in that part of the URL.
                For example, '/artists/Vincent%20van%20Gogh'. I'm passing the full 'artworks' array again so ArtistPage can filter it. */}
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