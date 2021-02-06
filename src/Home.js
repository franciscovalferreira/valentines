import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './Home.css';

class Home extends React.Component {
  render() {
    return <div className="Home-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">O Dia dos Namorados é no santo António!</h3>
        <p className="App-text">Dicas infalíveis de Santo António para encontrares o amor da tua vida</p> 
        <button className="App-secondary-button">Vamos a isso!</button>
    </div>
    ;
  }
}

export default Home;