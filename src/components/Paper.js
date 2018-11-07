import React, { memo } from 'react';
import styled from 'styled-components';
import { flex, gradient } from '../styles';

const Paper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => (props['no-padding'] ? '0px' : '15px')};
  ${(props) => props.flex && flex};
  ${(props) => props.gradient && gradient};
`;

export default memo(Paper);
