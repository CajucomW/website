import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBarStyle">
                <BrowserRouter>
                    <Link to="/" className="LinkStyle">About</Link>
                    <Link to="/tech" className="LinkStyle">Tech</Link>
                    <Link to="/jiujitsu" className="LinkStyle">JiuJitsu</Link>
                    <Link to="/pta" className="LinkStyle">PTA</Link>
                </BrowserRouter>
            </div>
        )
    }
}

export default NavBar;