import React, { Component } from 'react';
import './Tech.css';
import { Link } from 'react-router-dom'


import Article from '../Article/Article.js';

class Tech extends Component {
    state = {
        blogPosts: [],
    }

    componentDidMount() {
        console.log('working...');
        fetch('api/all')
            .then(response => response.json())
            .then(data => {
                console.log('did data come back?', data);
                this.setState({
                    blogPosts: data.posts,
                });
            });
    }

    render() {
        return (
            <div className="TechStyle">
                <h2>Wence Cajucom</h2>
                <p>full stack developer</p>
                <p>(...in training)</p>
                {
                this.state.blogPosts.map((post, index) => (
                    <Article title={post.title} image={post.image} key={index}>
                    {
                        post.content.map((text, index) => (
                        <p key={index}>{text}</p>
                        ))
                    }
                    <Link to={'/post/' + index}>Read more...</Link>
                    </Article>
                ))
                }
            </div>
        );
    }
}

export default Tech;