import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    lineThrough: {
        textDecoration: 'line-through',
        color: '#C3C1B7'
    }
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
                    height="240"
                    image={img_main}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                        <Typography margin={0} gutterBottom variant="h6" component="div">
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
                    <Link style={{ display: 'block', width: '100%' }} to={`/order/${_id}`}><Button sx={{ width: '100%' }} fullWidth variant="contained" size="medium">Purchase Now</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default HomeProduct;