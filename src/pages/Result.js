import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from '../providers/GameProvider';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'
import Option from '../components/Option';

const Result = () => {
  const { userChoice, setUserChoice, score, setScore } = useContext(GameContext);
  const [houseChoice, setHouseChoice] = useState("");
  const [gameResult, setGameResult] = useState("");

  const options = ["rock", "paper", "scissors"];
  const navigate = useNavigate();

  useEffect(() => {
    const houseDraw = options[Math.floor(Math.random() * options.length)]
    if (userChoice === houseDraw) {
      setGameResult("draw")
      setScore(score)
    } else if (
      (userChoice === "rock" && houseDraw === "scissors") ||
      (userChoice === "paper" && houseDraw === "rock") ||
      (userChoice === "scissors" && houseDraw === "paper")
    ) {
      setGameResult("win")
      setScore(score + 1)
    } else {
      setGameResult("lose")
      if (score > 0) {
        setScore(score - 1)
      }
    }
    setHouseChoice(houseDraw);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setUserChoice("")
    navigate('/', { replace: true });
  }

  return (
    <Wrapper>
      <OptionWrapper>
        <InnerWrapper>
          <ShadowEffect isActive={gameResult === "win"} />
          <Option type={userChoice} />
        </InnerWrapper>
        <OptionTitle>you picked</OptionTitle>
      </OptionWrapper>
      <ResultWrapper>
        <TitleResult>{gameResult === 'draw' ? gameResult : `You ${gameResult}`}</TitleResult>
        <Button onClick={handleClick} secondaryBtn>play again</Button>
      </ResultWrapper>
      <OptionWrapper>
        <InnerWrapper>
          <ShadowEffect isActive={gameResult === "lose"} />
          <Option type={houseChoice} />
        </InnerWrapper>
        <OptionTitle>the house picked</OptionTitle>
      </OptionWrapper>
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 100px 0;
  height: 230px;
  ${({ theme }) => theme.breakpoints.md} {
    height: 270px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    height: 300px;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  `;

const InnerWrapper = styled.div`
    position: relative;
  `;

const ShadowEffect = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: hsla(0, 0%, 0%, 0.2);
  border-radius: 50%;
  z-index: -1;
  ${({ theme }) => theme.breakpoints.md} {
    width: 115px;
    height: 115px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    width: 130px;
    height: 130px;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    box-shadow: 0 0 0 15px hsla(0, 0%, 100%, 0.04);
    border-radius: 50%; 
    transition: 0.3 ease;
    transition-delay: 0.35s;
    ${({ theme }) => theme.breakpoints.md} {
    width: 115px;
    height: 115px;
    box-shadow: 0 0 0 25px hsla(0, 0%, 100%, 0.04);
    }
    ${({ theme }) => theme.breakpoints.lg} {
    width: 130px;
    height: 130px;
    box-shadow: 0 0 0 35px hsla(0, 0%, 100%, 0.04);
    }
  };
  &::after {
    box-shadow: 0 0 0 35px hsla(0, 0%, 100%, 0.03), 0 0 0 65px hsla(0, 0%, 100%, 0.02);
    transition-delay: 0.45s;
    ${({ theme }) => theme.breakpoints.md} {
      box-shadow: 0 0 0 45px hsla(0, 0%, 100%, 0.03), 0 0 0 75px hsla(0, 0%, 100%, 0.02);
    }
    ${({ theme }) => theme.breakpoints.lg} {
      box-shadow: 0 0 0 55px hsla(0, 0%, 100%, 0.03), 0 0 0 85px hsla(0, 0%, 100%, 0.02);
    }
  };
`;

const OptionTitle = styled.span`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  margin-top: 10px;
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 23px;
  }
`;

const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  order: 1;
  width: 100%;
`;

const TitleResult = styled.h2`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  margin: 10px 0;
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 32px;
  }
`;


