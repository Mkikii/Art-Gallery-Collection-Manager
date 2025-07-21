import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArtworkList from './Components/ArtworkList'



function App() {
  const [artWorks, setArtWorks ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    fetch("")
    .then((response) => response.json())
    .then(data => setArtWorks(data))
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
    <ArtworkList  artWorks={artWorks}/>
    </>
  )

}

export default App
