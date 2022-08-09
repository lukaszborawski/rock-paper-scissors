import React, { useContext } from 'react'
import { GameContext } from '../providers/GameProvider';
import styled, { css } from 'styled-components';
import rockIcon from '../assets/icons/rock.svg'
import paperIcon from '../assets/icons/paper.svg'
import scissorsIcon from '../assets/icons/scissors.svg'

const Option = ({ type }) => {
  const { userChoice, setUserChoice } = useContext(GameContext);

  const handleClick = () => {
    if (!userChoice) {
      setUserChoice(type)
    }
  }

  return (
    <Button onClick={handleClick} type={type}>
      <InnerBackground>
        <Icon />
      </InnerBackground>
    </Button>
  )
}

export default Option;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: inset 0 -5px 0 rgba(0, 0, 0, 0.25);
  
  ${({ type }) =>
    type === 'rock' &&
    css`
			background: ${({ theme }) => theme.rock};
      ${Icon} {
        background-image: url(${rockIcon});
      };
		`};
  ${({ type }) =>
    type === 'paper' &&
    css`
      background: ${({ theme }) => theme.paper};
      ${Icon} {
        background-image: url(${paperIcon});
      };
    `}
  ${({ type }) =>
    type === 'scissors' &&
    css`
      background: ${({ theme }) => theme.scissors};
      ${Icon} {
        background-image: url(${scissorsIcon});
      };
    `}
`;

const InnerBackground = styled.div`
  background-color: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 3px 0 rgba(0, 0, 0, 0.25);
`;
const Icon = styled.div`
width: 100%;
height: 100%;
background: no-repeat center;
background-size: 55%;
`;