import React from 'react'
import { useParams } from 'react-router'

const ArtistPage = ({artWorks}) => {
    const { name } = useParams();

    const filteredArtWorks = artWorks.filter(
        art => art.artist.toLowerCase() === name.toLowerCase()
    )
    return (
    <>
        <main>
            <h1>ARTIST'S WORK</h1>
            {filteredArtWorks.length === 0 ? (<p>No Artworks for this artist found</p>) : 
            (
                filteredArtWorks.map(art => (
                    <div key={art.id}> 
                        <h3>{art.title}</h3>
                        <img src={art.image} alt={art.title} />
                    </div>
                ))
            )}
        </main>
    </>
    )
}

export default ArtistPage