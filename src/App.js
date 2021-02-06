import React from 'react';
import './App.css';
import background from './bg-web.jpg';
import Home from './Home.js';
import Cards from './Cards.js';
import Tradition from './Tradition.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {

  
  
  render() {
    return (
      <div className="App" style={{
        backgroundImage:"url(" + background + ")",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}>
        <Cards />
      </div>
    );
  }
}

export default App;
