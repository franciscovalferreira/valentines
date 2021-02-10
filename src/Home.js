import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './Home.css';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.startButtonCopy = props.startButtonCopy;
  }

  render() {
    return <div className="Home-container">
        <a href="http://santoantonio.museudelisboa.pt/">
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
        <h3 className="App-title">O Dia dos Namorados é no Santo António!</h3>
        <p className="App-text">Dicas infalíveis para encontrares o amor da tua vida</p> 
        <button className="App-secondary-button" onClick={this.props.handler}><i class="fa fa-bolt"></i> &nbsp;{this.startButtonCopy}</button>
        <Container>
          <Row>
            <Col>
              <div className="footer fixed-bottom Home-alert"> <i className="fa fa-info-circle"></i> &nbsp;Quer saber mais sobre as sorte e simpatias a Santo António? Veja <span style={{
                fontWeight:"bold",
                textDecoration:"underline"
              }}>aqui</span></div>
            </Col>
          </Row>
        </Container>
    </div>
    ;
  }
}

export default Home;