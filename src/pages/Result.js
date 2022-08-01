import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from '../providers/GameProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'
import Option from '../components/Option';

const Result = () => {
  const { userChoice } = useContext(GameContext);
  const [houseChoice, setHouseChoice] = useState("");

  const newHouseChoice = () => {
    const options = ["rock", "paper", "scissors"];
    setHouseChoice(options[Math.floor(Math.random() * options.length)]);
  };
  
  useEffect(() => {
    newHouseChoice();
  }, []);


  return (
    <Wrapper>
      <Link to={`/`}>
        <Option type={userChoice} />
        <Button onClick={() => setHouseChoice("")} secondaryBtn>play again</Button>
        <Option type={houseChoice} />
      </Link>
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;