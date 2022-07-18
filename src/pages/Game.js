import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import triangle from '../assets/icons/bg-triangle.svg'
import Option from '../components/Option';

const Game = () => {
  return (
    <Wrapper>
      <Link to={`/result`}>
        <Option type='rock'></Option>
        <Option type='paper'></Option>
        <Option type='scissors'></Option>
      </Link>
    </Wrapper>
  )
}

export default Game;

const Wrapper = styled.div`
  position: relative;
  margin: 150px auto;
  width: 230px;
  height: 230px;
  background: url(${triangle}) no-repeat center;
  background-size: 100%;
`