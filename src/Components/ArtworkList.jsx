
import React from 'react'
import { Link } from 'react-router-dom'



const ArtworkList = ( { artWorks}) => {
    return (
    <>
    <main>
    <h1>HOME PAGE</h1>
    {artWorks.map(art => (
        <div key={art.id}>
            <h3>{art.title}</h3>
            <p> by {art.artist} </p>
            <img src={art.image} alt={art.title} />
            <Link to = {`/artist/${art.artist}`}>
            <button>View Artist's Work</button>         
            </Link>
        </div>
    ))}
    </main>
    </>
    )
}

export default ArtworkList

