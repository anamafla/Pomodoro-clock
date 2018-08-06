import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledContainer = styled.div`
  padding: 1em;
  text-align: center;
`;
export const StyledDisplay = styled.div`
  padding: 10px;
  margin: auto;
  width: 50%;
  background-color: white;
  color: gray;
  font-weight: bold;
  font-family: 'Quantico', sans-serif;
  border: none;
  border-radius: 25px;
  font-size: 50px;
`;

export const StyledButton = styled(Button)`
  padding: 0 30px;
`;
