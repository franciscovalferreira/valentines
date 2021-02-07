import React from 'react';
import ReactDOM from 'react-dom';
import quote from './quote.png';
import './Tradition.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Tradition extends React.Component {

    constructor(props){
        super(props);
        this.tradition = props.tradition;
        this.source = props.source;
    }

    render() {
        return <div className="Tradition-overlay">
            <Container>
                <Row>
                    <Col>
                    <img src={quote} className="Tradition-icon" alt="Quote" />
                    <p className="Tradition-quote">{this.tradition}</p> 
                    <p className="Tradition-source">{this.source}</p> 
                    <button className="Tradition-button"><i className="fa fa-copy"></i>  &nbsp;Copiar</button>
                    </Col>
                </Row>
            </Container>
        </div>
        ;
    }
}

export default Tradition;