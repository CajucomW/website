import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <img src={this.props.image} className="Article-image" alt="allergy img" />
        
        <h3>{this.props.title}</h3>

        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Article;
