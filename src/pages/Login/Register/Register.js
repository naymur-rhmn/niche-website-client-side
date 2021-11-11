import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { user, googleSignIn, signUpUsingEmail } = useAuth();
    const [userData, setUserData] = useState({});
    const history = useHistory();


    const getUserData = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newValue = { ...userData };
        newValue[type] = value;
        setUserData(newValue);
    }

    const handleEmailRegister = e => {
        e.preventDefault()
        if (userData.password !== userData.password2) {
            return;
        }
        signUpUsingEmail(userData.email, userData.password, userData.name)

    }


    const handleGoogleSignIn = () => {
        googleSignIn(history);
    }

    return (
        <Box height="100vh" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box width="400px" style={{ backgroundColor: 'white', textAlign: 'center' }}>
                <Typography align="center" variant="h6">
                    REGISTER
                </Typography>
                <form onSubmit={handleEmailRegister}>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="filled-password-input"
                        label="Your Name"
                        type="text"
                        name="name"
                        onBlur={getUserData}
                        autoComplete="current-password"
                        variant="filled"
                        required
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="filled-password-input"
                        label="Email"
                        type="Email"
                        name="email"
                        onBlur={getUserData}
                        autoComplete="current-password"
                        variant="filled"
                        required
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={getUserData}
                        autoComplete="current-password"
                        variant="filled"
                        required
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        name="password2"
                        onBlur={getUserData}
                        autoComplete="current-password"
                        variant="filled"
                        required
                    />
                    <Button sx={{ marginTop: 2 }} type="submit" variant="contained">Log In</Button>
                </form>
                <Link style={{ margin: '10px', display: 'inline-block' }} to='/login'><Typography variant="body2">Already a User? Please Login</Typography></Link>
                <Divider sx={{ width: '50%', margin: '0 auto', marginBottom: '2px' }} />
                <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
            </Box>
        </Box>
    );
};

export default Register;