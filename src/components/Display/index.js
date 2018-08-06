import React, { Component } from 'react'
import { StyledContainer } from './style';
import { StyledDisplay } from './style';
import { StyledButton } from './style';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import Replay from '@material-ui/icons/Replay';

class Display extends Component {

  constructor(props) {
   super(props);


   this.state = {
     timeRemaining: props.timeRemaining,
   }

   this.startClock = this.startClock.bind(this);
   this.stopClock = this.stopClock.bind(this);

}

 startClock() {
   console.log('props.timeRemaining',this.state.timeRemaining);
   console.log('here in startClock');
   this.interval = setInterval(this.props.countDown,1000);
  }

  stopClock() {
    console.log('here in stopClock');
    clearInterval(this.interval);
  }



  render() {
        console.log('Here in render of Display');
        console.log(this.state.timeRemaining);

    return (

      <div>
        <StyledContainer>
        <StyledDisplay>
         <span>{Math.floor(this.props.timeRemaining/60000)}</span>
         <span>  : </span>
         <span>{Math.floor((this.props.timeRemaining%60000)/1000)}</span>
         <br/>
         <StyledButton onClick={this.startClock} variant="fab" mini color="primary" >
           <PlayArrow/>
         </StyledButton>
         <span>  </span>
         <StyledButton onClick={this.stopClock} variant="fab" mini color="primary">
           <Pause/>
         </StyledButton>
         <StyledButton onClick={this.props.reset} variant="fab" mini  color="primary">
           <Replay/>
         </StyledButton>
        </StyledDisplay>


        </StyledContainer>
      </div>
    )
  }
}

export default Display;
