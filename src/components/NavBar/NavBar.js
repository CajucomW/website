import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBarStyle">
                <Link className="LinkStyle" to={"/"}>About</Link>
                <Link className="LinkStyle" to={"/tech/"}>Tech</Link>
                <Link className="LinkStyle" to="/jiujitsu/">JiuJitsu</Link>
                <Link className="LinkStyle" to="/PTA/">PTA</Link>
            </div>
        )
    }
}

export default NavBar;