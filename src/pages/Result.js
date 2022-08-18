import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from '../providers/GameProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'
import Option from '../components/Option';

const Result = () => {
  const { userChoice, setUserChoice, score, setScore } = useContext(GameContext);
  const [houseChoice, setHouseChoice] = useState("");
  const [gameResult, setGameResult] = useState("");

  const options = ["rock", "paper", "scissors"];

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

  return (
    <Wrapper>
      <OptionWrapper>
        <Option type={userChoice} />
        <OptionTitle>you picked</OptionTitle>
      </OptionWrapper>
      <ResultWrapper>
        <TitleResult>{gameResult === 'draw' ? gameResult : `You ${gameResult}`}</TitleResult>
        <Link to={`/`}>
          <Button onClick={() => setUserChoice("")} secondaryBtn>play again</Button>
        </Link>
      </ResultWrapper>
      <OptionWrapper>
        <Option type={houseChoice} />
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
  ${({ theme }) => theme.breakpoints.lg} {
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
`;

const OptionTitle = styled.span`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  margin-top: 10px;
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 20px;
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


