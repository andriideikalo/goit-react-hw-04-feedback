import styled from '@emotion/styled';

// export const Ul = styled.ul`
//   display: flex;
//   list-style: none;
// `;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  border: none;
  background-color: gray;
  padding: 10px;
  border-radius: 50%;

  :hover {
    background-color: tomato;
    transform: translate(0, 0.15em);
  }
`;

export default Button;
