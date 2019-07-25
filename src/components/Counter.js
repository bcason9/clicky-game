import React from "react";


class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
    <div style={{backgroundColor: "lightblue", height: 575}}>
      <div className="jumbotron text-center" style={{marginLeft: 100, marginRight: 100, backgroundColor: "lightgreen"}}>
        <h1 style={{fontSize: 100}}>
          Click Counter!
        </h1>
        <div style={{marginTop: 50}}>
          <h4>Score: {this.state.count}</h4>
          <br/>
          <img style={{height:125, width: 125}} onClick={this.handleIncrement} src="https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423" alt=""/>
          <img style={{height:125, width: 120}} onClick={this.handleIncrement} src="https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png" alt=""/>
          <img style={{height:125, width: 120}} onClick={this.handleIncrement} src="https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607" alt=""/>
          <img style={{height:125, width: 120}} onClick={this.handleIncrement} src="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014" alt=""/>
          <img style={{height:125, width: 125}} onClick={this.handleIncrement} src="http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836" alt=""/>
         
         
        </div>
      </div>
    </div>
    );
  }
}

export default Counter;
