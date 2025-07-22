import { useEffect, useState } from 'react'
import './App.css'
import ArtworkList from './Components/ArtworkList'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ArtistPage from './Components/ArtistPage.jsx'
import ArtworkForm from './Components/ArtworkForm.jsx'
import ComingSoon from './Components/ComingSoon.jsx'
import ErrorMessage from './Components/ErrorMessage.jsx'
import NavBar from './Components/NavBar.jsx'



function App() {
  const [artWorks, setArtWorks ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    fetch("http://localhost:3000/artworks")
    .then((response) => response.json())
    .then(data => {
      setArtWorks(data)
      setIsLoading(false)
    })
    .catch(err => {
      setError(err.message)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading Artworks...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route  path="/" element={<ArtworkList artWorks={artWorks} />}  />
        <Route  path="/artworks/new"  element={<ArtworkForm />}  />
        <Route  path="/comingsoon" element={<ComingSoon />} />
        <Route  path="/artist/:name" element={<ArtistPage />} />
        <Route  path="*" element={<ErrorMessage />}      />
        </Routes>
        </>
    
  )

}

export default App
