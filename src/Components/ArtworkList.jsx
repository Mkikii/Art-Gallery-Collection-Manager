import React from 'react'


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
        </div>
    ))}
    </main>
    </>
    )
}

export default ArtworkList