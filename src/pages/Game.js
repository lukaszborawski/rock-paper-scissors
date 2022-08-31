import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import triangle from '../assets/icons/bg-triangle.svg';
import Option from '../components/Option';
import { motion } from 'framer-motion';


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: { opacity: 1, scale: 1 }
}

const Game = () => {
  return (
    <Wrapper
      variants={container}
      initial="hidden"
      animate="visible"
      >
      <Link to={`/result`}>
        <InnerWrapper>
          <motion.div variants={item}>
            <Option type='rock'></Option>
          </motion.div>
        </InnerWrapper>
        <InnerWrapper>
          <motion.div variants={item}>
            <Option type='paper'></Option>
          </motion.div>
        </InnerWrapper>
        <InnerWrapper>
          <motion.div variants={item}>
            <Option type='scissors'></Option>
          </motion.div>
        </InnerWrapper>
      </Link>
    </Wrapper>
  )
}

export default Game;

const Wrapper = styled(motion.div)`
  position: relative;
  margin: 100px auto;
  width: 230px;
  height: 230px;
  background: url(${triangle}) no-repeat center;
  background-size: 100%;
  ${({ theme }) => theme.breakpoints.md} {
    width: 270px;
    height: 270px;
  }
  ${({ theme }) => theme.breakpoints.lg} {
    width: 300px;
    height: 300px;
  }
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
`;