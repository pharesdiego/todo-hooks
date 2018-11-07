import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import Text from './Text';

const Container = styled.div`
  & input {
    height: 25px;
    width: 240px;
  }
`;

const Input = ({ label, ...rest }) => {
  return (
    <Container>
      <Paper no-padding>
        <Paper no-padding>
          <Text small>{label}</Text>
        </Paper>
        <input type="text" {...rest} />
      </Paper>
    </Container>
  );
};

export default Input;
