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
     lengthBreak: 60000,
     isRunning: false,
     type: "Session",

     };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
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

  startClock() {
     console.log('props.timeRemaining',this.state.timeRemaining);
     if (this.state.timeRemaining > 0)
       this.interval = setInterval(this.countDown,1000);
    }

  stopClock() {
     console.log('here in stopClock');
     clearInterval(this.interval);
    }




  countDown() {
    if(this.state.timeRemaining > 0){
      const isRunning = true;
      this.setState ({isRunning});
      console.log('here in countDown');
      const timeRemaining = this.state.timeRemaining - 1000;
      console.log('timeRemaining', timeRemaining);
      this.setState ({timeRemaining});
    };
    if(this.state.timeRemaining === 0){
      let type="";
      if (this.state.type === "Session") {
        type = "Break";
        const timeRemaining = this.state.lengthBreak
        this.setState ({timeRemaining});
      } else {
        type = "Session";
        const timeRemaining = this.state.length
        this.setState ({timeRemaining});
      }
      this.setState({type});
      this.playSound();

    }
  }

  playSound(){
    console.log("Here in playSound");
    const sound = document.createElement('audio');
    sound.src= "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";
    sound.currentTime = 0
    sound.play();
    sound.remove();
  }

  reset() {
    console.log('here in reset');
    clearInterval(this.interval);
    this.setState({ timeRemaining: this.state.length});
  }

 render() {
   console.log("Here in render")
  return (
    <StyledAppContainer>
      <h1> Pomodoro Clock </h1>
      <Display
      timeRemaining= { this.state.timeRemaining }
      isRunning= { this.state.isRunning }
      type= {this.state.type}
      startClock= { this.startClock }
      stopClock= { this.stopClock }
      countDown= { this.countDown }
      reset= {this.reset}

      />
      <br/>
      <ControlTimer
      name= { "controlSession" }
      length= { this.state.length }
      type= { this.state.type }
      handleIncrement= {this.increment}
      handleDecrement= {this.decrement}

      />
      <ControlTimer
      name= { "controlBreak" }
      length= { this.state.lengthBreak }
      type= { this.state.type }
      handleIncrement= {this.increment}
      handleDecrement= {this.decrement}
      />

    </StyledAppContainer>
  )};
}

  export default App;
