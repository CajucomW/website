import React, { Component } from 'react';
import './Tech.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


import Article from '../Article/Article.js';

class Tech extends Component {
    state = {
        title: 'Blog Title',
        content: 'Content Goes Here',
    }

    componentDidMount() {
        console.log('axios working...');
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    title: response.data.title,
                    content: response.data.content,
                });
            },
    }

    // componentDidMount() {
    //     console.log('working...');
    //     fetch('http://127.0.0.1:8000/api/')
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