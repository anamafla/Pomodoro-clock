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

}

  render() {

        const minutes =  Math.floor(this.props.timeRemaining/60000)
        const remainderSeconds =Math.floor((this.props.timeRemaining%60000)/1000)
    return (

      <div>
        <StyledContainer>
        <StyledDisplay>
         <div>{this.props.type}</div>
         <span>{minutes}</span>
         <span>  : </span>
         <span>{remainderSeconds< 10? '0':''}{remainderSeconds}</span>
         <br/>
         {this.props.isRunning ?
         (<StyledButton onClick={this.props.stopClock} variant="fab" mini color="primary">
           <Pause/>
         </StyledButton>):
         (<StyledButton onClick={this.props.startClock} variant="fab" mini color="primary" >
           <PlayArrow/>
         </StyledButton>)
       }
          <span>  </span>
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
