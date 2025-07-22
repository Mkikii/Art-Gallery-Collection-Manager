import React, { useState } from 'react';
const ArtworkForm = ({ addArtwork }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [theme, setTheme] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArtwork = { title, artist, theme, image };
    try {
      const response = await axios.post('http://localhost:3000/artworks', newArtwork);
      addArtwork(response.data);
      setTitle('');
      setArtist('');
      setTheme('');
      setImage('');
    } catch (error) {
      console.error('Error adding artwork:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      <input type="text" placeholder="Theme" value={theme} onChange={(e) => setTheme(e.target.value)} required />
      <input type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Add Artwork</button>
    </form>
  );
};

export default ArtworkForm;
