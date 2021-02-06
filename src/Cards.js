import React from 'react';
import ReactDOM from 'react-dom';
import './Cards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from './card-1.png';


class Cards extends React.Component {
  render() {
    return <Container>
    <Row>
      <Col>
        <h2 style={{
          fontWeight:"800",
          marginTop:"125px"
        }}>
            É este ano, desta não passa!
        </h2>
        <p style={{
          fontWeight:"600"
        }}>Escolhe uma carta e vê o que a sorte te reserva!</p>
        <br></br>
        <br></br>
      </Col>
    </Row>
    <Row>
     <Col style={{
        marginBottom:"25px"
      }}>
        <div className="Card-body">
          <img src={image1} className="Card-img" alt="logo" />
          <p className="Card-title">Opção 1</p>
        </div>
      </Col>
      <br></br>
      <Col style={{
        marginBottom:"25px"
      }}>
        <div className="Card-body">
          <img src={image1} className="Card-img" alt="logo" />
          <p className="Card-title">Opção 2</p>
        </div>
      </Col>
      <Col style={{
        marginBottom:"25px"
      }}>
        <div className="Card-body">
          <img src={image1} className="Card-img" alt="logo" />
          <p className="Card-title">Opção 3</p>
        </div>
      </Col>
    </Row>
  </Container>
    ;
  }
}

export default Cards;