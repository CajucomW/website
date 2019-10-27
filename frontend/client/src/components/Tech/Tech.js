import React, { Component } from 'react';
import './Tech.css';
import { Link } from 'react-router-dom'


import Article from '../Article/Article.js';

class Tech extends Component {
    state = {
        title: 'Blog Title',
        content: 'Content Goes Here',
    }

    // componentDidMount() {
    //     console.log('working...');
    //     fetch('api/all')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('did data come back?', data);
    //             this.setState({
    //                 blogPosts: data.posts,
    //             });
    //         });
    // }

    render() {
        return (
            <div className="TechStyle">
                <h2>Wence Cajucom</h2>
                <p>full stack developer</p>
                <p>(...in training)</p>
                <h3>{this.state.title}</h3>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default Tech;