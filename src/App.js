import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdownbox from "./dropdownbox"

const ballScores = ['0','1','2','3','4','6','w'];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      run:0,
      wicket:0,
      over:0,
      maxball:6,
      currentBall: 0,
      overall:[0]
    };
  }

  componentDidMount(){
   const interval = setInterval(() => {
     // ball
     if(this.state.wicket<=9 && this.state.over <10){ // wicket sld be below 10 & over sld be below 10
      let currentBall = ballScores[Math.floor(Math.random() * ballScores.length)]; // simulate the current ball score
      if(currentBall == 'w') {
        this.setState({wicket: this.state.wicket + 1, run: this.state.run + 0,overall:this.state.overall+currentBall});
      } else {
        this.setState({run: this.state.run + parseInt(currentBall),
        overall:this.state.overall+currentBall});
      }
      // currentBall(0) sld below maxball(6),this is for ballcount
       if(this.state.currentBall <= this.state.maxball) {
         if(this.state.currentBall === 6 ){
           this.setState({over: this.state.over+1, currentBall: 1});
         } else {
           this.setState({currentBall: this.state.currentBall + 1});
         }
       }
     } else {
       clearInterval(interval);
     }

   }, 1000);
  }


  render() {
    const showBall = this.state.over < 10;
    return(
        <div>
          <div className="App img">
            <h1 className="changeColor">LIVE SCORE</h1>
            <div>
              <h3>INDIA</h3>
                <div className="showColor">
                  <p>
                  {"("}{(this.state.over)}{showBall && "."} {showBall && this.state.currentBall}{")"}
                  </p>
            <p>{this.state.run}{"/"}{this.state.wicket}</p>
            </div>
          </div>
        </div>
            <Dropdownbox totalscore={this.state.overall}/>
      </div>
   )
  }
}

export default App;
