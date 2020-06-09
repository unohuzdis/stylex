import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => {
        return photos.map((item) => {
          const price = Math.floor(Math.random() * 200) + 10; // price ranges from 10 to 200
          return Object.assign({}, item, { price });
        })
      })
      .then(newPhotos => {this.setState({ items: newPhotos })});
  }

  render() {
    const { items } = this.state;

    return (
      <div className='App'>
        {items.map(item => <h1 key={item.id}>{item.title}</h1>)}
      </div>
    );
  }
}


export default App;
