# Art Gallery Collection Manager

This project is a web application designed to manage and display a collection of art pieces. Users can browse existing artworks, add new pieces to the collection, and explore art by specific artists or themes.

## Table of Contents

- Features

- Technologies Used

- Project Structure

- Deployment Links

- Setup Instructions

- Prerequisites

- Backend Setup (json-server)

- Frontend Setup (React Vite)

- How to Run

- Usage

## Features

- Browse Artworks: View a collection of art pieces on the home page.

- Artwork Details: Each artwork card displays its title, artist, and image.

- Add New Artwork: A dedicated form to submit new art pieces to the collection.

- Explore by Artist: Click on an artist's name to view all artworks by that specific artist.

- Responsive Design: Optimized for viewing on various devices (mobile, tablet, desktop).

## Technologies Used

**Frontend:**

- React (with Vite)

- React Router DOM (for client-side routing)

- Tailwind CSS (for styling, via CDN for simplicity)

**Backend (Mock API):**

- Render (for a simple REST API serving data from a JSON file)

## Project Structure

art-gallery-collection-manager/
├── public/
│   ├── images/         <-- Your artwork image files go here
│   └── index.html      <-- Main HTML file for the React app
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      <-- Navigation bar
│   │   ├── ArtworkList.jsx <-- Displays a grid of artwork cards
│   │   ├── ArtworkCard.jsx <-- Displays a single artwork
│   │   ├── ArtworkForm.jsx <-- Form for adding new artworks
│   │   └── ArtistPage.jsx  <-- Displays artworks by a specific artist
│   ├── App.jsx           <-- Main application component, handles routing and data fetching
│   └── main.jsx          <-- React entry point
├── db.json             <-- Your mock backend data for json-server
├── package.json        <-- Project dependencies and scripts
└── vite.config.js      <-- Vite configuration

## Deployment Links

- View the deployment application at: "https://art-gallery-manager.netlify.app/"

- Repository Link: "https://github.com/Dunamis-001/Art-Gallery-Collection-Manager"

- Deployed API: "https://json-server-4-b4vp.onrender.com"

## Setup Instructions

- Follow these steps to get the project running on your local machine.

## Prerequisites

- Node.js (LTS version recommended)

- npm (Node Package Manager, comes with Node.js)

## Backend Setup (json-server)

- Install json-server globally (recommended):

- npm install -g json-server

- If you prefer local installation, run npm install json-server in your project root.

- Create db.json:
- Ensure you have a db.json file in your project's root directory with the artwork data. An example db.json was provided in our conversation.
- Important: Make sure the image paths in db.json correctly point to images within your public/images/ folder (e.g., "image": "/images/Starry Night.jpg").

**Start the json-server:**
Open a new terminal window (separate from where you'll run the React app) in your project's root directory and run:

- json-server --watch db.json --port 3000

This will start your mock API server, typically accessible at "http://localhost:3000".

**Frontend Setup (React Vite):**

- Navigate to your project directory:

- Open your primary terminal and navigate to the root of your project folder.

**Install project dependencies:**

- npm install

- This will install react, react-dom, react-router-dom, etc.

- Ensure correct file structure:
- Verify that your src/components folder exists and contains Navbar.jsx, ArtworkList.jsx, ArtworkCard.jsx, ArtworkForm.jsx, and ArtistPage.jsx. Also, ensure App.jsx and main.jsx are directly in src/.
- Crucially, make sure all your image files are in public/images/.

## How to Run

- Start the Backend (if not already running):
- In your first terminal:

- json-server --watch db.json --port 3000

**Start the Frontend:**

- In your second terminal (in the project root):

- npm run dev

Vite will compile your React application and provide a local development server URL (e.g., http://localhost:5173).

- Open in Browser:
- Open your web browser and navigate to the URL provided by npm run dev.

## Usage

- Home Page (/): Displays all artworks in the collection.

- Add New Artwork (/artworks/new): Fill out the form to add a new art piece. The image URL should be a path relative to your public folder (e.g., /images/my-new-art.jpg) or a full external URL.

- Artist Page (/artists/:name): Click on an artist's name from any artwork card to see all pieces by that specific artist.