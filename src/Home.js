import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './Home.css';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.startButtonCopy = props.startButtonCopy;
    this.state = {show:false}

    this.close = this.handleClose.bind(this);
    this.show = this.handleShow.bind(this);
  }

  //Modal controls
  handleClose(){
    this.setState({
      show:false
    })
  };
  handleShow(){
    this.setState({
      show:true
    })
  };

  render() {
    return <div className="Home-container">
        <a href="http://santoantonio.museudelisboa.pt/">
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
        <h3 className="App-title">O Dia dos Namorados é no Santo António!</h3>
        <p className="App-text">Dicas infalíveis para encontrares o amor da tua vida</p> 
        <button className="App-secondary-button" onClick={this.props.handler}><i class="fa fa-heart"></i> &nbsp;{this.startButtonCopy}</button>
        <Container>
          <Row>
            <Col>
              <div onClick={this.show} className="footer fixed-bottom Home-alert"> &nbsp;Quer saber mais sobre as tradições de Santo António? Veja <span style={{
                fontWeight:"bold",
                textDecoration:"underline"
              }}>aqui</span></div>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.close} 
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{fontWeight:"600", fontFamily:"Poppins"}}>Tradições de Santo António</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontFamily:"Poppins", color:"#415970"}}>
            Diz-nos a tradição que Santo António é o padroeiro dos namorados e o santo casamenteiro. Por isso no Brasil, o dia dos namorados é celebrado a 12 de junho, na véspera de Santo António. Em Portugal podemos celebrar o amor pelo menos duas vezes por ano: No dia de São Valentim, 14 de fevereiro, e no dia de Santo António, 13 de junho. 
            <br></br><br></br>
            Mas Santo António é invocado ao longo de todo o ano para resolver casos amorosos ou para obter ou manter o amor desejado, através de inúmeras fórmulas a que se chamam sortes e simpatias. 
            <br></br><br></br>
            Para se alcançar o desejado, muitas vezes a imagem do santo é sujeita a práticas de coerção mais ou menos violentas. Leite de Vasconcelos, Teófilo de Braga, Armando de Matos e muitos outros etnógrafos portugueses recolheram em finais do séc. XIX e inícios do séc. XX muitas dessas práticas ancestrais. Apesar de terem sido interditadas por vários documentos eclesiásticos nos séculos XVI e XVII, estas tradições sobreviveram tanto em Lisboa como em todo o país e no mundo lusófono.
            <br></br><br></br>
            Por isso, aqui deixamos um conjunto de sortes e simpatias recolhidas da tradição popular. Porque se chegaram até nós devem ter algum resultado...
          </Modal.Body>
          <Modal.Footer>
            <Button style={{fontWeight:"bold", fontFamily:"Poppins", backgroundColor:"#415970", padding:"15px 20px"}} variant="secondary" onClick={this.close}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    ;
  }
}

export default Home;