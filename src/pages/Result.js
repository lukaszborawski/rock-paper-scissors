import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button'

const Result = () => {
  return (
    <Wrapper>
      <Link to={`/`}>
        <Button secondaryBtn>play again</Button>
      </Link>
    </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`