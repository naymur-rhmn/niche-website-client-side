import { Box } from '@mui/system';
import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import banner from '../../../images/banner.jpg'
import { Container, Grid, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    banner: {
        background: '#EBEBEB',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '24px',

    },
    bannerBtn: {
        backgroundColor: '#FFB800',
        color: '#22221B',
        '&:hover': {
            background: "#FFB800",
        },
    }
});

const BannerBtn = styled(Button)({
    background: 'linear-gradient(45deg, #FFB800 30%, #FFB800 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#222222 !important',
    height: 48,
    padding: '0 30px',
    '&:hover': {
        background: 'linear-gradient(45deg, #FFB800 30%, #FFB800 90%)',
        transform: 'translateY(-5px)',
        transition: '.5s'
    },
})

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.banner}>
            <Container>
                <Grid container spacing={3}>
                    <Grid style={{ display: 'flex', alignItems: 'center' }} item lg={8} md={10}>
                        <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ fontWeight: 'bold' }} color="#FFB800" variant="h6">
                                    WELCOME
                                </Typography>
                                <Typography variant="h1" sx={{ fontWeight: 'bold', margin: '12px 0', fontSize: { lg: 96, md: 80, sm: 70, xs: 50 } }} color="white">
                                    Full Suspension Mountain Bikes
                                </Typography>
                                <Typography sx={{ paddingRight: '3%' }} variant="h6" color="white">
                                    Varius nisl lobortis lorem augue pellentesque ultrices Nisi tempor nisl lectus purus ut enim quis sed Cursus cursus ipsum massa gravida purus
                                </Typography>
                                <Link style={{ textDecoration: 'none' }} to='/explore'>
                                    <BannerBtn sx={{ marginTop: 4 }} className={classes.bannerBtn} variant="contained">Shop Now <ArrowRightAltIcon sx={{ marginLeft: 2 }} /></BannerBtn>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;