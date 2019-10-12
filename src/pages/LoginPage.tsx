import React, { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components/macro';

import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useActions from '../actions';
import * as AuthenticationActions from '../actions/authentication';

export default function LoginPage() {
  const authenticationActions = useActions(AuthenticationActions);

  const [newEmail, setNewEmail] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleLogin = (event: MouseEvent) => {
    event.preventDefault();
    authenticationActions.login({ email: newEmail, password: newPassword });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <LoginAvatar>
          <LockOutlinedIcon />
        </LoginAvatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={newEmail}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setNewEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={newPassword}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </SubmitButton>

          <Grid container>
            <Grid item xs>
              <Link href="/forgot" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Container>
  );
}

// Styles
const Paper = styled.div`
  margin-top: ${(props) => props.theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginAvatar = styled(Avatar)`
  margin: ${(props) => props.theme.spacing(1)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing(1)}px;
`;

const SubmitButton = styled(Button)`
  margin: ${(props) => props.theme.spacing(3, 0, 2)};
`;
