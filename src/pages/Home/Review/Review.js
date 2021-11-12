import { Typography, Container, Grid, Paper } from '@mui/material';
import { Box, typography } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { makeStyles, styled } from '@mui/styles';
import { ClassNames } from '@emotion/react';


const useStyles = makeStyles({

    testimonialBg: {
        background: '#EBEBEB',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),url('https://i.ibb.co/pRRXqK7/himiway-bike.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }
});

const Review = () => {
    const [reviews, setReviews] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // https://i.ibb.co/pRRXqK7/himiway-bike.jpg






    return (
        <Box className={classes.testimonialBg}>
            <Container sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <Box sx={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Box sx={{ textAlign: 'center', padding: '0 30px', marginBottom: 8 }}>
                        <Typography color="#FFB800" sx={{ fontWeight: 'bold' }} variant="h3">
                            Why Our Customer Love MountainBike
                        </Typography>
                        <Typography color="lightGray" sx={{ padding: '0 4%' }} variant="body1">
                            Morbideli ornare at mauris in aliquam ut tellus.Ut pharetra sed velit et sapien eros scelerisque.
                            Morbideli ornare at mauris in aliquam ut tellus.Ut pharetra sed velit et sapien eros scelerisque.
                        </Typography>

                    </Box>
                    <Grid container spacing={3}>
                        {
                            reviews.map(review => (
                                <Grid key={review.name} item lg={4} md={4} sm={6} xs={12}>
                                    <Box>
                                        <Paper sx={{ padding: 2, backgroundColor: '#EBEBEB', marginBottom: 1 }}>
                                            <Typography>
                                                {review.message}
                                            </Typography>
                                        </Paper>
                                        <Typography color="white" align="center" variant="h6">{review.name}</Typography>
                                        <Typography color="green" align="center" variant="body2">{review.profession}</Typography>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Review;