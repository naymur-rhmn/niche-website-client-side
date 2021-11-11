import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeProduct from '../../Home/HomeProduct.js/HomeProduct';


const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    products.map(product => <HomeProduct key={product._id} product={product}></HomeProduct>)
                }

                {/*  */}
            </Grid>
        </Container>
    );
};

export default ExploreProducts;