import React, { Component } from 'react';
import Display from './Display';
import ControlTimer from './ControlTimer';
import { StyledAppContainer } from './style';


class App extends Component {

 constructor(props) {
   super(props);
   this.state = {
     timeRemaining: 1500000,
     length: 1500000,

     };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.countDown = this.countDown.bind(this);
    this.reset = this.reset.bind(this);
   };

  increment() {
    if(this.state.length > 0){
      const length = this.state.length + 60000;
      this.setState ({length});
      this.setState ({timeRemaining: length});
    }
  }

  decrement() {
    if(this.state.length > 0){
      const length = this.state.length - 60000;
      this.setState ({length});
      this.setState ({timeRemaining: length});
    }
  }

  countDown() {
    if(this.state.timeRemaining > 0){
      console.log('here in countDown');
      const timeRemaining = this.state.timeRemaining - 1000;
      console.log('timeRemaining', timeRemaining);
      this.setState ({timeRemaining});
    };
  }
  reset() {
    console.log('here in reset');
    clearInterval(this.interval);
    this.setState({ timeRemaining: this.state.length});
  }


 render() {
  return (
    <StyledAppContainer>
      <h1> Pomodoro Clock </h1>
      <Display
      timeRemaining= { this.state.timeRemaining }
      countDown= { this.countDown }
      reset= {this.reset}
      />
      <br/>
      <ControlTimer
      length= { this.state.length }
      handleIncrement= {this.increment}
      handleDecrement= {this.decrement}
      />
      <ControlTimer
      length= { this.state.length }
      handleIncrement= {this.increment}
      handleDecrement= {this.decrement}
      />

    </StyledAppContainer>
  )};
}

  export default App;
