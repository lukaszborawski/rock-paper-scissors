import React from 'react'
import styled from 'styled-components'
import rulesImage from '../assets/icons/rules.svg'
import closeIcon from '../assets/icons/close.svg'

const Rules = ({ showRules, setShowRules }) => {
  return (
    <>
      {showRules && (
        <Backdrop>
          <Modal>
            <InnerWrapper>
              <Title>Rules</Title>
              <CloseButton onClick={() => setShowRules(false)} />
            </InnerWrapper>
            <Image src={rulesImage} alt='game rules' />
          </Modal>
        </Backdrop>
      )}
    </>
  )
}

export default Rules;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: ${({ theme }) => theme.white};
  margin: 0 15px;
  padding: 20px;
  border-radius: 10px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.darkgray};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.div`
  width: 25px;
  height: 25px;
  background: url(${closeIcon}) no-repeat center;
  transition: 0.2s;
  cursor: pointer;
  filter: invert(0.8);
  &:hover {
    filter: invert(0.4);
  }
`;
