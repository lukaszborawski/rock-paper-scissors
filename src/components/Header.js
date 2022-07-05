import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/logo.svg'

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <ScoreWrapper>
        <ScoreTitle>Score</ScoreTitle>
        <Score>12</Score>
      </ScoreWrapper>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 25px;
  border: 2px solid ${({ theme }) => theme.gray};;
  border-radius: 10px;
`;

const LogoWrapper = styled.div`
  height: 50px;
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 5px 15px;
  border-radius: 5px;
`;

const ScoreTitle = styled.h2`
  font-size: 12px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.blue};
  text-transform: uppercase;
`;

const Score = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.darkgray};
  font-weight: bold;
`;

