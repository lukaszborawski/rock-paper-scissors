import styled from "styled-components";

const Button = styled.button`
padding: 8px 35px;
color: ${({ theme }) => theme.gray};
background-color: transparent;
border: 2px solid ${({ theme }) => theme.gray};
border-radius: 5px;
font-family: inherit;
letter-spacing: 2px;
text-transform: uppercase;
transition: 0.2s;
cursor: pointer;
&:hover {
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.white};
}
`;

export default Button;