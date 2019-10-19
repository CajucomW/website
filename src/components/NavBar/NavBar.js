import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBarStyle">
                <BrowserRouter>
                    <Link to="/" className="LinkStyle">About</Link>
                    <Link to="/Tech" className="LinkStyle">Tech</Link>
                    <Link to="/Jiujitsu" className="LinkStyle">JiuJitsu</Link>
                    <Link to="/PTA" className="LinkStyle">PTA</Link>
                </BrowserRouter>
            </div>
        )
    }
}

export default NavBar;