import React from "react";
import "./App.css";
import background from "./bg-web.jpg";
import Home from "./Home.js";
import Cards from "./Cards.js";
import Tradition from "./Tradition.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import traditions from "./traditionsDB.js";

const Fade = ({children, ...props}) => (
  <CSSTransition {...props} timeout={1000} classNames="fade">
    {children}
  </CSSTransition>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.homeHandler = this.showCards.bind(this);
    this.cardHandler = this.showTradition.bind(this);
    this.restartHandler = this.restart.bind(this);
    this.state = { page: <Home handler={this.homeHandler} startButtonCopy="Vamos a isso!"/>};
  }

  //Handler to update parent' state
  showCards() {
    this.setState({
      show:false,
      //page: <Cards handler={this.cardHandler} />,
    });
    setTimeout(function() { 
      this.setState({
        show:true,
        page: <Cards handler={this.cardHandler} />,
      }) //After 1 second, set render to true
    }.bind(this), 350)
  }
  showTradition() {    
    this.setState({
      show:false,
      //page: <Cards handler={this.cardHandler} />,
    });
    setTimeout(function() { 
      var item = traditions[Math.floor(Math.random() * traditions.length)];
      this.setState({
        show:true,
        page: <Tradition restartHandler={this.restartHandler} tradition={item.tradition} source={item.source}/>,
      }) //After 1 second, set render to true
    }.bind(this), 350)
  }
  restart() {
    this.setState({
      show:false,
      //page: <Cards handler={this.cardHandler} />,
    });
    setTimeout(function() { 
      this.setState({
        show:true,
        page: <Home handler={this.homeHandler} startButtonCopy="Vamos de novo!"/>,
      }) //After 1 second, set render to true
    }.bind(this), 350)
  }


  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Fade in={this.state.show}>
            {this.state.page}
        </Fade>
      </div>
    );
  }
}

export default App;
