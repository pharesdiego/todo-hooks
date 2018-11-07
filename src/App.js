import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Paper from './components/Paper';
import Button from './components/Button';
import Text from './components/Text';
import Input from './components/Input';
import ListItem from './components/ListItem';
import { keygen } from './utils';
import { theme } from './styles';
import { useWordsHistoryLength, useWordsSpeedPerSecond } from './hooks';

const App = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const wordsHistoryLength = useWordsHistoryLength(inputText);
  const wordsSpeedPerSecond = useWordsSpeedPerSecond(inputText);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Paper flex column gradient>
          <Text big>Todo with Hooks</Text>
          <Text small>Note's length: {inputText.length}</Text>
          <Text small>Times you've pressed any key: {wordsHistoryLength}</Text>
          <Text small>Keystrokes per second: {wordsSpeedPerSecond}</Text>
        </Paper>
        <Paper>
          <Input
            label="Insert your todo's content"
            placeholder="Here"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button
            onClick={() => {
              setTodos((prevTodos) => [{ text: inputText, id: keygen() }, ...prevTodos]);
              setInputText('');
            }}
          >
            Create todo
          </Button>
        </Paper>
        <Paper>
          {todos.map(({ id, text }, i) => (
            <ListItem
              key={id} 
              content={text} 
              deg={i}
              onClick={() => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))}
            />
          ))}
        </Paper>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
