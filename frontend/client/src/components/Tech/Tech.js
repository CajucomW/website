import React, { Component } from 'react';
import './Tech.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';


// import Article from '../Article/Article.js';

class Tech extends Component {
    state = {
        title: '',
        content: '',
    }


    // componentDidMount() {
    //     console.log('axios working...');
    //     axios.get('http://127.0.0.1:8000/api/')
    //         .then(response => {
    //             this.setState({
    //                 title: response.title,
    //                 content: response.content,
    //             });
    //         })
    // }

    componentDidMount() {
        console.log('working...');
        fetch('http://127.0.0.1:8000/api/?format=json')
            .then(response => response.json())
            .then(data => {
                console.log('did data come back?', data[0]);
                let article = data[0]

                this.setState({
                    title: article.title,
                    content: article.content
                });
                console.log('title and content?')
            });
    }

    render() {
        return (
            <div className="TechStyle">
                <h2>Wence Cajucom</h2>
                <p>full stack developer</p>
                <p>(...in training)</p>
                <h3>Title is supposed to go here: {this.state.title}</h3>
                <p>Content is supposed to go here:  {this.state.content}</p>
            </div>
        );
    }
}

export default Tech;