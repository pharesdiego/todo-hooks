import React, { memo } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px;
  border: 1px dashed ${(props) => props.theme.color};
`;

export default memo(Button);
