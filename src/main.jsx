import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ArtworkList from './Components/ArtworkList.jsx'
import ArtistPage from './Components/ArtistPage.jsx'
import ArtworkForm from './Components/ArtworkForm.jsx'
import ComingSoon from './Components/ComingSoon.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ArtworkList />
  },
  {path: "/artist/:name",
    element: <ArtistPage />
  },
  {path: "/artworks/new",
    element: <ArtworkForm />
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
