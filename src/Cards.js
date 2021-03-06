import React from 'react';
import ReactDOM from 'react-dom';
import './Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from './card-1.png';
import image2 from './card-2.png';
import image3 from './card-3.png';


class Cards extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return <Container>
    <Row>
      <Col>
        <h2 className=".App-title" style={{
          fontWeight:'bold'
        }}>
            É este ano, desta não passa!
        </h2>
        <p style={{
          fontWeight:"500",
          fontSize:"1.25rem"
        }}>Escolhe uma carta e vê o que a sorte te reserva!</p>
        <br></br>
        <br></br>
      </Col>
    </Row>
    <Row>
     <Col style={{
        marginBottom:"25px"
      }}>
        <div className="Card-body" onClick={this.props.handler}>
          <img src={image1} className="Card-img" alt="logo" />
        </div>
      </Col>
      <br></br>
      <Col style={{
        marginBottom:"25px"
      }}>
        <div className="Card-body" onClick={this.props.handler}>
          <img src={image3} className="Card-img" alt="logo" />
        </div>
      </Col>
      <Col style={{
        marginBottom:"25px"
      }}>
        <div className="Card-body" onClick={this.props.handler}>
          <img src={image2} className="Card-img" alt="logo" />
        </div>
      </Col>
    </Row>
  </Container>
    ;
  }
}

export default Cards;