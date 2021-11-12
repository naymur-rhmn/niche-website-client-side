import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    lineThrough: {
        textDecoration: 'line-through',
        color: '#C3C1B7'
    }
})

const PurchaseBtn = styled(Button)({
    background: 'linear-gradient(45deg, #FFB800 30%, #FFB800 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#222222 !important',
    height: 40,
    padding: '0 30px',
    '&:hover': {
        background: 'linear-gradient(45deg, #FFB800 30%, #FFB800 90%)',
        transform: 'translateY(-5px)',
        transition: '.5s'
    },
})

const HomeProduct = ({ product }) => {
    const classes = useStyles();
    const { title, img_main, description, price, last_price, _id } = product;

    return (
        <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card style={{ boxShadow: 'none' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    width="100%"
                    image={img_main}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                        <Typography margin={0} variant="h6" component="div">
                            {title}
                        </Typography>
                        <Box>
                            <span className={classes.lineThrough}>${last_price}</span>
                            <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>${price}</span>
                        </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                        {description.split(' ').slice(0, 15).toString().replace(/,/g, ' ')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{ display: 'block', width: '100%', textDecoration: 'none' }} to={`/order/${_id}`}><PurchaseBtn sx={{ width: '100%' }} fullWidth variant="contained" size="medium">Purchase Now</PurchaseBtn></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default HomeProduct;