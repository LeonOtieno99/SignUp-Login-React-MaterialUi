import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
})
const navigate = useNavigate()
const handleSubmit = (event) =>{
    event.preventDefault();
        console.log(values);
        axios.post('http://localhost:8081/login',values)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
};

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
            sx={{
              marginTop:8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            >
              <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant='h5'>
                Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label="Enter Email"
                  name='email'
                  onChange={e => setValues({...values, email: e.target.value})}
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  onChange={e => setValues({...values, password: e.target.value})}
                  label='password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                  >
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/register" variant='body2'>
                        {"Don't have an account? Register here"}
                      </Link>
                    </Grid>
                  </Grid>
              </Box>
            </Box>
      </Container>
        
    </div>
  )
}

export default Login