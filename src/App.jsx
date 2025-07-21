import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArtworkList from './Components/ArtworkList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ArtworkList />
    </>
  )

}

export default App
