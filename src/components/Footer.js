import React, { useState } from 'react'
import styled from 'styled-components'
import Rules from './Rules';
import Button from './Button';

const Footer = () => {

  const [showRules, setShowRules] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setShowRules(true)}>Rules</Button>
      <Rules showRules={showRules} setShowRules={setShowRules} />
    </Wrapper>

  )
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;