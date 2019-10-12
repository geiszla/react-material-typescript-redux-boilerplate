import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { Button, Typography } from '@material-ui/core';

import HomeBox from '../components/HomeBox';
import { RootState } from '../reducers';

export default function HomePage() {
  const [boxColor, setBoxColor] = React.useState('red');
  const todoList = useSelector((state: RootState) => state.todoList);

  const onButtonClick = () => setBoxColor(boxColor === 'red' ? 'blue' : 'red');

  return (
    <Root>
      <Typography variant="h4" gutterBottom>
        You have
        {' '}
        {todoList.length}
        {' '}
        TODOs in your list!
      </Typography>

      <Center>
        <HomeBox size={300} color={boxColor} />

        <ChangeColorButton onClick={onButtonClick} variant="outlined" color="primary">
          Change Color
        </ChangeColorButton>
      </Center>
    </Root>
  );
}

// Styles
const Root = styled.div`
  height: 100%;
  text-align: center;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Center = styled.div`
  flex: 1;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChangeColorButton = styled(Button)`
  margin-top: 20px;
`;
