import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div>
        
        <nav>
        <ul>
        
            <div className="logo">
            Flparvez
            </div>

        <li> <a href="#">Home</a></li>
        <li> <a href="#">Cotnact</a></li>
        <li> <a href="#">About</a></li>
        </ul>
        </nav>

        </div>
    );
}

export default Navbar;