import React, { Component } from 'react'
import { StyledContainer } from './style';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class ControlTimer extends Component {

  render() {

   return (
    <div>
      <StyledContainer>
      <label>Session Length:  </label>
      <span> {Math.floor(this.props.length/60000)} </span>
      <div>
      <Button onClick= {this.props.handleIncrement} mini color="primary" >
       <AddIcon/>
      </Button>
      <Button onClick={this.props.handleDecrement} mini color="primary" >
       <RemoveIcon/>
      </Button>
      </div>
      </StyledContainer>
    </div>
   )
  }
}

export default ControlTimer;
