import React, { memo } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.theme.color};
  word-break: break-all;
  font-size: calc(
    14px + ${(props) => (props.small ? '0px' : props.medium ? '2vw' : props.big ? '3vw' : '1vw')}
  );
`;

export default memo(Text);
