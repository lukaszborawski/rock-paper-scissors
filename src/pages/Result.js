import React, { useContext } from 'react'
import { GameContext } from '../providers/GameProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'
import Option from '../components/Option';

const Result = () => {
  const { userChoice } = useContext(GameContext);

  return (
    <Wrapper>
      <Link to={`/`}>
        <Option type={userChoice} />
        <Button secondaryBtn>play again</Button>
      </Link>
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;