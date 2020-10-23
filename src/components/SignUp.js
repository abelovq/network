import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'


export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        firstName : '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
      this.handleSubmitForm = this.handleSubmitForm.bind(this)
      this.handleChangeInput = this.handleChangeInput.bind(this)
    }

  handleChangeInput = event => {
    event.persist();
    this.setState(prev => ({...prev, ...{[event.target.name] : event.target.value}}))
    console.log(event.target.value)
  }

    handleSubmitForm = event => {
      event.preventDefault();
      console.log("registration")
    }

render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={this.handleSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={this.handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={this.handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password-confirm"
                label="Confirm password"
                type="password-confirm"
                id="password-confirm"
                autoComplete="current-password"
                onChange={this.handleChangeInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}