import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleInput = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('https://ancient-basin-83605.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSuccess(true);
                }
            })
    }


    return (
        <>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }} variant="h5">Make a Admin</Typography>
            <Box sx={{ maxWidth: '400px' }}>
                {success && <Alert sx={{ marginBottom: 3 }} severity="success">Admin Role Added Successfully!</Alert>}
                <form onSubmit={handleMakeAdmin}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="filled"
                        required
                        onBlur={handleInput}
                    />
                    <Button type="submit" sx={{ marginTop: '20px' }} variant="contained" size="large">Make an Admin</Button>
                </form>
            </Box>
        </>
    );
};

export default MakeAdmin;