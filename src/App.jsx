import React, { useState, useEffect } from 'react';
import ArtworkForm from './Components/ArtworkForm';
import ArtworkList from './Components/ArtworkList';


const App = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/artworks');
        setArtworks(response.data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };
    fetchArtworks();
  }, []);

  const addArtwork = (newArtwork) => {
    setArtworks((prevArtworks) => [newArtwork, ...prevArtworks]);
  };

  return (
    <div>
      <h1>Artwork Gallery</h1>
      <ArtworkForm addArtwork={addArtwork} />
      <ArtworkList artworks={artworks} />
    </div>
  );
};

export default App;
