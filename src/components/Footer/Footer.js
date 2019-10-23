import React, { Component } from 'react';
import instagram from '../../logos/instagram.svg';
import twitter from '../../logos/twitter.svg';
import linkedin from '../../logos/linkedin.svg';
import github from '../../logos/github.svg';

import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="FooterStyle">
                <a target="_blank" href="https://www.instagram.com/fatwence/">
                    <img src={instagram} className="Logo-size" alt="instagram logo" />
                </a>
                <a target="_blank" href="https://twitter.com/CajucomW">
                    <img src={twitter} className="Logo-size" alt="twitter logo" />
                </a>
                 <a target="_blank" href="https://www.linkedin.com/in/wence-cajucom-429667187/">
                    <img src={linkedin} className="Logo-size" alt="Linkedin logo" />
                </a>
                 <a target="_blank" href="https://github.com/CajucomW">
                    <img src={github} className="Logo-size" alt="github logo" />
                </a>
             </div>

        )
    }
}

export default Footer;