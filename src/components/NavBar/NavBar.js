import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBarStyle">
                <BrowserRouter>
                    <Link to="/">About</Link>
                </BrowserRouter>
                
                tech
                jiujitsu
                pta
            </div>
        )
    }
}

export default NavBar;