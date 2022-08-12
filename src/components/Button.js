import styled, { css } from "styled-components";

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
  border: 2px solid ${({ theme }) => theme.white};
}
${({ secondaryBtn }) =>
    secondaryBtn &&
    css`
      padding: 10px 50px;
      color: ${({ theme }) => theme.darkgray};
      background-color: ${({ theme }) => theme.white};
      &:hover {
        color: hsl(349, 70%, 56%);
      }
    `}
${({ theme }) => theme.breakpoints.lg} {
    font-size: 16px;
  }
`;

export default Button;