
import React, { useState } from 'react'; // I'm importing useState to manage the form input values.
import { useNavigate } from 'react-router-dom'; // I'm importing useNavigate to programmatically redirect the user after submission.

function ArtworkForm({ onAddArtwork }) { // I'm expecting a function 'onAddArtwork' as a prop from App.jsx to update the main artwork list.
  // I'm setting up state variables for each input field in my form. This makes them "controlled components".
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  // I'm also managing states for the submission process (loading indicator) and feedback messages.
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // This hook gives me a function to change the URL.

  // This function runs when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // I'm preventing the default browser form submission behavior (which would cause a page reload).
    setSubmitting(true); // I'm setting 'submitting' to true to show a loading state on the button.
    setMessage(''); // I'm clearing any previous messages.

    // I'm creating a new artwork object from the current state of my form inputs.
    const newArtwork = {
      title,
      artist,
      image,
      year: year ? parseInt(year) : undefined, // I'm converting the year to a number if it's provided.
      genre,
    };

    // I'm making a POST request to my json-server API to add the new artwork.
    fetch('http://localhost:3000/artworks', {
      method: 'POST', // Specifying the HTTP method as POST.
      headers: {
        'Content-Type': 'application/json', // Telling the server I'm sending JSON data.
      },
      body: JSON.stringify(newArtwork), // Converting my JavaScript object to a JSON string for the request body.
    })
    .then(response => {
      // I'm checking if the network response was successful. If not, I'll throw an error.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // I'm parsing the JSON response from the server.
    })
    .then(data => {
      onAddArtwork(data); // I'm calling the 'onAddArtwork' prop function to update the main artwork list in App.jsx.
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
    .catch(error => {
      // If there's any error during the fetch, I'll log it and display an error message to the user.
      console.error('Error adding artwork:', error);
      setMessage(`Failed to add artwork: ${error.message}`);
    })
    .finally(() => {
      // This block runs regardless of success or failure, so I'm setting 'submitting' back to false.
      setSubmitting(false);
    });
  };

  return (
    // This is the main container for my artwork submission form. I'm using Tailwind for layout and styling.
    <section className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg my-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add New Artwork</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input field for the artwork's title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            value={title} // The input's value is controlled by my 'title' state.
            onChange={(e) => setTitle(e.target.value)} // When the input changes, I update the 'title' state.
            required // This field is mandatory.
          />
        </div>
        {/* Input field for the artist's name */}
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
        {/* Input field for the image URL. I'm adding a placeholder to guide the user. */}
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
        {/* Input field for the year (optional) */}
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
        {/* Input field for the genre (optional) */}
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
        {/* The submit button. It's disabled while the form is submitting. */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors shadow-md font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={submitting}
        >
          {submitting ? 'Adding...' : 'Add Artwork'} {/* Text changes based on submission state. */}
        </button>
      </form>
      {/* I'm displaying feedback messages (success or error) to the user. */}
      {message && (
        <p className={`mt-4 text-center ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </section>
  );
}

export default ArtworkForm;
