import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    return (
    <nav className="bar">

        <h2>ART GALLERY</h2>

            <div class="links">
                <NavLink to="/" className="link">HOME</NavLink>
                <NavLink to="/artworks/new" className="link">NEW ART</NavLink>
                <NavLink to="/comingsoon" className="link">COMING SOON</NavLink>
            </div>
    

    </nav>
    )
}

export default NavBar