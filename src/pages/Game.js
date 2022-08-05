import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import triangle from '../assets/icons/bg-triangle.svg'
import Option from '../components/Option';

const Game = () => {
  return (
    <Wrapper>
      <Link to={`/result`}>
        <InnerWrapper>
          <Option type='rock'></Option>
        </InnerWrapper>
        <InnerWrapper>
          <Option type='paper'></Option>
        </InnerWrapper>
        <InnerWrapper>
          <Option type='scissors'></Option>
        </InnerWrapper>
      </Link>
    </Wrapper>
  )
}

export default Game;

const Wrapper = styled.div`
  position: relative;
  margin: 100px auto;
  width: 230px;
  height: 230px;
  background: url(${triangle}) no-repeat center;
  background-size: 100%;
`;

const InnerWrapper = styled.div`
  position: absolute;
  &:nth-child(1) {
    top: -20px;
    left: -30px;
  }
  &:nth-child(2) {
    top: -20px;
    right: -30px;
  }
  &:nth-child(3) {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`