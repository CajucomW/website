import React, { Component } from 'react';
// import instagram from '../../logos/instagram.svg';

import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="FooterStyle">
                <a target="_blank" href="https://www.instagram.com/fatwence/">
                    {/* <img src={instagram} className="Instagram-logo" alt="instagram logo" /> */}
                    <i className="icon-social-instagram" alt="instagram logo" />
                </a>
            </div>

        )
    }
}

export default Footer;