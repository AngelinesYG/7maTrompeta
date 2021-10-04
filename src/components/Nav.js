import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    const navStyle = {
       color: 'purple'
    };
        return (
            <div className="nav-container">
                <nav>
                    <h3><img src="/images/circle-logo.png" alt="image" position="static" height={64}/></h3>
                    <ul className="nav-Links">
                        <Link style={navStyle} to="/">
                        <li>Casa</li>
                        </Link>
                        <br />
                        <Link style={navStyle} to="/about">
                        <li>Mision</li>
                        </Link>
                        <br />
                        <Link style={navStyle} to="/announcements">
                        <li>Anuncios</li>
                        </Link>
                        <br />
                        <Link style={navStyle} to="/events">
                        <li>Eventos</li>
                        </Link>
                        <Link style={navStyle} to="/staff">
                        <li>Liderasgo</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
     
}

export default Nav