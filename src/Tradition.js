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
        this.restartHandler = props.restartHandler;
    }

    render() {
        return <div className="Tradition-overlay">
            <Container>
                <Row>
                    <Col>
                    <img src={quote} className="Tradition-icon" alt="Quote" />
                    <p className="Tradition-quote">{this.tradition}</p> 
                    <p className="Tradition-source">{this.source}</p> 
                
                    <button className="Tradition-button" onClick={()=>{window.location.href = "https://www.facebook.com/sharer/sharer.php?u=https://www.o-dia-dos-namorados-e-no-santo-antonio.pt";}}><i className="fa fa-facebook"></i>  &nbsp;Partilhar no Facebook</button>
                    <button className="Tradition-repeat-button" onClick={this.restartHandler}><i className="fa fa-refresh"></i>  &nbsp;Voltar ao ínicio</button>
                    </Col>
                </Row>
            </Container>
        </div>
        ;
    }
}

export default Tradition;