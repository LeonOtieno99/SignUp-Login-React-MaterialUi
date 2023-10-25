import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault();
            console.log(values);
            axios.post('http://localhost:8081/register',values)
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
                marginTop: 8,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
            }}
        >
            <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant='h5'>
                Register
            </Typography>
            
            <Box noValidate sx={{ mt: 3}}>
                <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                     
                        <TextField
                            autoComplete='given-name'
                            name='firstname'
                            onChange={e => setValues({...values, firstname: e.target.value})}
                            required
                            fullWidth
                            id='firstName'
                            label='First Name'
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id='lastname'
                            label='Last Name'
                            name='lastName'
                            onChange={e => setValues({...values, lastname: e.target.value})}
                            autoComplete='family-name'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id='email'
                            label="Email Address"
                            name='email'
                            onChange={e => setValues({...values, email: e.target.value})}
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name='password'
                            onChange={e => setValues({...values, password: e.target.value})}
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='new-password'
                        />
                    </Grid>
                        <Grid item xs={12}>
                        <Button
                        type='submit'
                        fullWidth
                        onClick={handleSubmit}
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                    >
                        Register
                    </Button>
                  </Grid>
                </Grid>
                </form>
                    
                
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Link to='/login' variant="body2">
                            Already have an account? Login here
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Register