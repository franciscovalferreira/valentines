import React from 'react';
import ReactDOM from 'react-dom';
import quote from './quote.png';
import './Tradition.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Tradition extends React.Component {

    render() {

        var traditions = [
            {
                "text":"Salta à fogueira de Santo António três vezes, mas em direções diferentes, e deixa cair uma moeda na fogueira ao saltar pela última vez. No dia seguinte, antes do romper do sol, vai buscá-la e a dá-a ao primeiro pobre. O noivo vai a ser de nome igual ao do pobre.",
                "source":"Santo António na Tradição Popular, Armando de Mattos, 1937, p.67"
            },
            {
                "text":"Coloca a imagem de Santo António dentro de um poço de cabeça para baixo.",
                "source":"História da Poesia Popular Portugueza – Ciclos Épicos, Theophilo Braga, Lisboa, 1905, p. 143"
            },
            {
                "text":"Tira o Menino Jesus do colo de Santo António e só o tornes a pôr quando o rapaz pedir namoro.",
                "source":"História da Poesia Popular Portugueza – Ciclos Épicos, Theophilo Braga, Lisboa, 1905, p. 143"
            },
            {
                "text":"Para que conheça o nome da rapariga, o rapaz deve cortar botões de rosa e dar nomes de diversas raparigas de quem gosta. Na manhã seguinte à da noite do santo, irá vê-los. O que estiver mais aberto é o que indica o nome da noiva.",
                "source":"Santo António na Tradição Popular, Armando de Mattos, 1937, p. 74"
            },
        ]

        var item = traditions[Math.floor(Math.random() * traditions.length)];

        return <div className="Tradition-overlay">
            <Container>
                <Row>
                    <Col>
                    <img src={quote} className="Tradition-icon" alt="Quote" />
                    <p className="Tradition-quote">{item.text}</p> 
                    <p className="Tradition-source">{item.source}</p> 
                    <button className="Tradition-button"><i className="fa fa-copy"></i>  &nbsp;Copiar</button>
                    </Col>
                </Row>
            </Container>
        </div>
        ;
    }
}

export default Tradition;