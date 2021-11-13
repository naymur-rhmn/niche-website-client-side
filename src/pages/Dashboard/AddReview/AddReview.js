import { TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    textarea: {
        color: 'black',
        width: '100%',
        border: 'none',
        borderBottom: '1px solid',
        backgroundColor: '#E8E8E8',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        marginTop: '8px',
        padding: '10px 8px',
        '&:hover,&:focus': {
            border: "none !important",
            borderBottom: "1px solid #1976D2"
        },
    }
})


const AddReview = () => {
    const classes = useStyles();
    const [number, setNumber] = useState('');
    const [reviewInfo, setReviewInfo] = useState({});

    const handleInput = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newValue = { ...reviewInfo };
        newValue[type] = value;
        setReviewInfo(newValue);
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        fetch('https://ancient-basin-83605.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setReviewInfo({});
                    alert('Thank you! your review is public now!')
                }
            })
    }


    const validateNumber = (event) => {
        const value = event.target.value;
        const setValue = value <= 5 ? value : number; //if the input value is greater than 10, then don't change the input value
        setNumber(setValue);
    };

    return (
        <>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }} variant="h5">Add a Public Review</Typography>

            <Box sx={{ maxWidth: '500px' }}>
                <form onSubmit={handleAddReview}>
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Name"
                        type="text"
                        name="name"
                        variant="filled"
                        required
                        onBlur={handleInput}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Ratings Out of Five"
                        type="number"
                        onChange={validateNumber}
                        value={number}
                        inputProps={{ maxLength: 10 }}
                        name="ratings"
                        variant="filled"
                        required
                        onBlur={handleInput}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Profession"
                        type="text"
                        name="profession"
                        variant="filled"
                        required
                        onBlur={handleInput}
                    />
                    <textarea className={classes.textarea} rows="10" style={{ width: '100%', border: 'none', borderBottom: '1px solid', backgroundColor: '#E8E8E8', borderTopLeftRadius: '3px', borderTopRightRadius: '3px', marginTop: '8px', padding: '10px 8px' }} placeholder="Comments" type="text"
                        name="comment"
                        onBlur={handleInput} ></textarea>
                    <Button type="submit" sx={{ marginTop: '20px' }} variant="contained" size="large">Send <SendIcon sx={{ marginLeft: 1, fontSize: '20px' }} /></Button>
                </form>
            </Box>
        </>
    );
};

export default AddReview;