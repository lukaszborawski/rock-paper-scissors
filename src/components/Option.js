import React from 'react'
import styled, { css } from 'styled-components';
import rockIcon from '../assets/icons/rock.svg'
import paperIcon from '../assets/icons/paper.svg'
import scissorsIcon from '../assets/icons/scissors.svg'

const Option = ({ type }) => {
  return (
    <Button type={type}>
      <InnerBackground>
        <Icon />
      </InnerBackground>
    </Button>
  )
}

export default Option;

const Button = styled.div`
  position: absolute;
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
      top: -20px;
      left: -30px;
			background: ${({ theme }) => theme.rock};
      ${Icon} {
        background-image: url(${rockIcon});
      };
		`};
  ${({ type }) =>
    type === 'paper' &&
    css`
      top: -20px;
      right: -30px;
      background: ${({ theme }) => theme.paper};
      ${Icon} {
        background-image: url(${paperIcon});
      };
    `}
  ${({ type }) =>
    type === 'scissors' &&
    css`
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
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