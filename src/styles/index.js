import { css } from 'styled-components';

export const theme = {
  color: '#000',
  bg: '#fff',
};

export const flex = css`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const gradient = css`
  background: linear-gradient(45deg, #ff3e3e, #f3ff34);
`;
