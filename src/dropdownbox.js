import React from 'react';

export default class Dropdownbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      remember:"",
      firstvalue:"",
      secondvalue:1
    };
  }
// chech what haapend in that ball
  overChange=(e)=>{
    let add=parseInt(e.target.value)*6
  this.setState({firstvalue:add})
  }
  ballChange=(e)=>{
  let sub=parseInt(e.target.value)
  this.setState({secondvalue:sub})
  }
  render(){
    const check = "" ===this.state.firstvalue;
    const out = "w" ===this.props.totalscore[parseInt(this.state.firstvalue)+parseInt(this.state.secondvalue)];

    return(
      <div>
      <div>
      {"NO.OF OVER: "}
      <select id="over" onClick={this.overChange} >
      <option value="0" >0</option>
      <option value="1" >1</option>
      <option value="2" >2</option>
      <option value="3" >3</option>
      <option value="4" >4</option>
      <option value="5" >5</option>
      <option value="6" >6</option>
      <option value="7" >7</option>
      <option value="8" >8</option>
      <option value="9" >9</option>
      </select>
      </div>
      <div>
      {"NO.OF BALL : "}
      <select id="over" onClick={this.ballChange}>
      <option value="1 " selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      </select>
      </div>
      <div>
      <div className="middle">
     <h2>
     {!out && !check && "In this ball the run scored "+
     this.props.totalscore[parseInt(this.state.firstvalue)+parseInt(this.state.secondvalue)]}
     {out && <span className="warning">This ball player got wicket</span>}
     </h2>
      </div>
      </div>
      </div>

    )
  }
}
