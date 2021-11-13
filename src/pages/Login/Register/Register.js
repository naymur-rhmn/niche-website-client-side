import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { googleSignIn, signUpUsingEmail, error } = useAuth();
    const [userData, setUserData] = useState({});
    const history = useHistory();


    const getUserData = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newValue = { ...userData };
        newValue[type] = value;
        setUserData(newValue);
    }

    // email register
    const handleEmailRegister = e => {
        e.preventDefault()
        if (userData.password !== userData.password2) {
            return;
        }
        signUpUsingEmail(userData.email, userData.password, userData.name, history)

    }
    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn(history);
    }

    return (
        <Box height="100vh" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box width="400px" style={{ backgroundColor: 'white', textAlign: 'center' }}>
                <Typography sx={{ marginBottom: 2, fontWeight: 'bold' }} align="center" variant="h5">
                    REGISTER
                </Typography>
                <Typography color="#FFB800" sx={{ marginBottom: 2, fontWeight: 'bold' }} align="center" variant="h5">
                    MOUNTAIN BIKE
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
                    {error && <Typography align='center' color="red">{error}</Typography>}
                    <Button size='large' sx={{ marginTop: 2, paddingLeft: '30%', paddingRight: '30%' }} type="submit" variant="contained">Register</Button>
                </form>
                <Link style={{ margin: '10px', display: 'inline-block' }} to='/login'><Typography variant="body2">Already a User? Please Login</Typography></Link>
                <Divider sx={{ width: '50%', margin: '0 auto', marginBottom: '2px' }} />
                <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
            </Box>
        </Box>
    );
};

export default Register;