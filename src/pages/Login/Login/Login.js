import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, googleSignIn, emailSignIn } = useAuth();
    const [userData, setUserData] = useState({});
    const history = useHistory();
    const location = useLocation();


    const getInput = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newValue = { ...userData };
        newValue[type] = value;
        setUserData(newValue);
    }


    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn(history, location);
    }

    // email and password sign in
    const handleEmailSignIN = (e) => {
        e.preventDefault()
        emailSignIn(userData.email, userData.password, history, location)
    }

    return (
        <Box height="100vh" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box width="400px" style={{ backgroundColor: 'white', textAlign: 'center' }}>
                <Typography align="center" variant="h6">
                    LOGIN {user?.email} {user?.displayName}
                </Typography>
                <form onSubmit={handleEmailSignIN}>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="filled-password-input"
                        label="Email"
                        type="Email"
                        name="email"
                        onBlur={getInput}
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={getInput}
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <Button sx={{ marginTop: 2 }} type="submit" variant="contained">Log In</Button>
                </form>

                <Link style={{ margin: '10px', display: 'inline-block' }} to='/register'><Typography variant="body2">Have no Account? Please Register</Typography></Link>

                <Divider sx={{ width: '50%', margin: '0 auto', marginBottom: '2px' }} />
                <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
            </Box>
        </Box>
    );
};

export default Login;