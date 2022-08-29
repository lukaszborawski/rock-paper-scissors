import React, { useContext } from 'react'
import { GameContext } from '../providers/GameProvider'
import styled from 'styled-components'
import logo from '../assets/icons/logo.svg'

const Header = () => {
  const { score } = useContext(GameContext);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <ScoreWrapper>
        <ScoreTitle>Score</ScoreTitle>
        <Score>{score}</Score>
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
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
`;

const LogoWrapper = styled.div`
  height: 55px;
  ${({ theme }) => theme.breakpoints.lg} {
    height: 65px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  padding: 5px 15px;
  border-radius: 5px;
`;

const ScoreTitle = styled.h2`
  font-size: 12px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.blue};
  text-transform: uppercase;
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 15px;
  }
`;

const Score = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.darkgray};
  font-weight: bold;
  ${({ theme }) => theme.breakpoints.lg} {
    font-size: 35px;
  }
`;

