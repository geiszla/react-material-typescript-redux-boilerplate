import React from 'react';
import styled from 'styled-components/macro';

import { Button, Grid, Typography } from '@material-ui/core';

import TodoTable from '../components';
import TodoDialog from '../components/TodoDialog';

export default function TodoPage() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTodo = () => {
    setOpen(true);
  };

  return (
    <Root container>
      <TodoDialog open={open} onClose={handleClose} />

      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Todo List
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <ButtonContainer>
          <AddButton
            variant="contained"
            color="secondary"
            onClick={handleAddTodo}
          >
            Add Todo
          </AddButton>
        </ButtonContainer>
      </Grid>

      <Grid item xs={12}>
        <TodoTable />
      </Grid>
    </Root>
  );
}

// Styles
// Styles
const Root = styled(Grid)`
  padding: 20px;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AddButton = styled(Button)`
  margin-bottom: 15px;
`;
