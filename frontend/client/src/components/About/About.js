import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="AboutStyle">
                <h2>hi! I'm Wence</h2>
                <p>This space is a work in progress. It's a place where
                    I'll be practicing and applying things I learned in my 
                    four-month bootcamp. This app itself is based on a project
                    from that class -
                    <a href="http://www.wencecajucom.com" target="_blank">
                        wencecajucom.com
                        </a>
                    , which is a solo project using django framework. I'll
                    be "reactifying" that project, which has really been kicking
                    my but since I've learned about javascript library.
                </p>
            </div>
        )
    }
}

export default About;