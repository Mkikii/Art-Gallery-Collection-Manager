import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

function ArtworkForm({ onAddArtwork }) { 
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
 
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // This hook gives me a function to change the URL.

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitting(true); 
    setMessage(''); // I'm clearing any previous messages.

    
    const newArtwork = {
      title,
      artist,
      image,
      year: year ? parseInt(year) : undefined, 
      genre,
    };

    // I'm making a POST request to my json-server API.
    fetch('https://json-server-4-b4vp.onrender.com/artworks', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(newArtwork), 
    })
    .then(response => {
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // I'm parsing the JSON response from the server.
    })
    .then(data => {
      onAddArtwork(data); 
      setMessage('Artwork added successfully!'); // I'm setting a success message.
      // I'm clearing all the form fields after successful submission.
      setTitle('');
      setArtist('');
      setImage('');
      setYear('');
      setGenre('');
      // After a short delay, I'm navigating the user back to the home page.
      setTimeout(() => {
        navigate('/');
      }, 1500);
    })
    
    .finally(() => {
      // This block runs regardless of success or failure, so I'm setting 'submitting' back to false.
      setSubmitting(false);
    });
  };

  return (
    // This is the main container for my artwork submission form. 
    <section className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add New Artwork</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
       
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
       
        <div>
          <label htmlFor="artist" className="block text-sm font-medium text-gray-700">Artist</label>
          <input
            type="text"
            id="artist"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            id="image"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            placeholder="e.g., /images/my-new-artwork.jpg or a full URL"
          />
        </div>
        
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year (Optional)</label>
          <input
            type="number"
            id="year"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre (Optional)</label>
          <input
            type="text"
            id="genre"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors shadow-md font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={submitting}
        >
          {submitting ? 'Adding...' : 'Add Artwork'} 
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 text-center ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </section>
  );
}


export default ArtworkForm;
