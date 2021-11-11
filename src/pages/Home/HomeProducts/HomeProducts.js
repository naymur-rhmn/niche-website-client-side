import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct.js/HomeProduct';


const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    return (

        <Box style={{ backgroundColor: '#EBEBEB', padding: "30px 0" }}>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" >
                        NEW PRODUCTS
                    </Typography>
                    <Typography color="skyblue" sx={{ marginTop: -2 }} variant="h4" >
                        ---------
                    </Typography>
                    <Typography variant="body2" >
                        Check out what’s going on in the store. Hurry up! Bestsellers often sold out in couples of weeks.
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    {
                        products.map(product => <HomeProduct key={product.id} product={product} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeProducts;