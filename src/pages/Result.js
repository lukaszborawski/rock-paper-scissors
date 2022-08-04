import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from '../providers/GameProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'
import Option from '../components/Option';

const Result = () => {
  const { userChoice } = useContext(GameContext);
  const [houseChoice, setHouseChoice] = useState("");
  const [gameResult, setGameResult] = useState("");

  const options = ["rock", "paper", "scissors"];

  useEffect(() => {
    const houseDraw = options[Math.floor(Math.random() * options.length)]
    if (userChoice === houseDraw) {
      setGameResult("draw")
    } else if (
      (userChoice === "rock" && houseDraw === "scissors") ||
      (userChoice === "paper" && houseDraw === "rock") ||
      (userChoice === "scissors" && houseDraw === "paper")
    ) {
      setGameResult("win")
    } else {
      setGameResult("lose")
    }
    setHouseChoice(houseDraw);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Option type={userChoice} />
      <TitleResult>{gameResult}</TitleResult>
      <Link to={`/`}>
        <Button secondaryBtn>play again</Button>
      </Link>
      <Option type={houseChoice} />
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleResult = styled.h2`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
`;