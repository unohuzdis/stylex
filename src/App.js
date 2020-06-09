import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './components/header/header.component';
import './App.css';


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(response => response.json())
//       .then(photos => {
//         return photos.map((item) => {
//           const price = Math.floor(Math.random() * 200) + 10; // price ranges from 10 to 200
//           return Object.assign({}, item, { price });
//         })
//       })
//       .then(newPhotos => {this.setState({ items: newPhotos })});
//   }

//   render() {
//     const { items } = this.state;

//     return (
//       <div className='App'>
//         {items.map(item => <h1 key={item.id}>{item.title}</h1>)}
//       </div>
//     );
//   }
// }

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

