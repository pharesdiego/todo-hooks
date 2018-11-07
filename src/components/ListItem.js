import React, { memo } from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import Text from './Text';

const Container = styled.div`
  background: linear-gradient(${(props) => props.deg + 'deg'}, #ff3e3e, #f3ff34);
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const ListItem = ({ content, ...rest }) => {
  return (
    <Container {...rest}>
      <Paper>
        <Text>{content}</Text>
      </Paper>
    </Container>
  );
};

export default memo(ListItem);
