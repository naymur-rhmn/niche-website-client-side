import { Container, Grid, Typography } from '@mui/material';
import React from 'react';


const AboutAdventure = () => {
    return (
        <Container maxWidth="xxl">
            <Grid container spacing={12} sx={{ alignItems: 'center', height: '90vh' }}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/2KTs3Hn/cycle.jpg" alt="" />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography sx={{
                        fontSize: {
                            lg: 65,
                            md: 52,
                            sm: 36,
                            xs: 24
                        },
                        fontWeight: "bold",
                        paddingRight: 3
                    }}>Best Adventure Tourer Bikes</Typography>
                    <Typography sx={{ paddingRight: 4 }} variant="body1">
                        Bicycles can be categorized in many different ways: by function, by number of riders, by general construction, by gearing or by means of propulsion
                    </Typography>
                    <Grid container spacing={1} marginTop={1}>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/QPMvZF8/cycle2.jpg" alt="" />
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/0Xt5xy5/cycle1.jpg" alt="" />
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <img style={{ width: "100%" }} src="https://i.ibb.co/7n3v5YY/cycle3.jpg" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};



export default AboutAdventure;