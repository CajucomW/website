import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBarStyle">
                <BrowserRouter>
                    <Link className="LinkStyle" to={"/"}>About</Link>
                    <Link className="LinkStyle" to={"/tech/"}>Tech</Link>
                    <Link className="LinkStyle" to="/jiujitsu/">JiuJitsu</Link>
                    <Link className="LinkStyle" to="/PTA/">PTA</Link>
                </BrowserRouter>
            </div>
        )
    }
}

export default NavBar;