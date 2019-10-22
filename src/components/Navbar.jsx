import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="">Portfolio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="my-navbar">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
               
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;