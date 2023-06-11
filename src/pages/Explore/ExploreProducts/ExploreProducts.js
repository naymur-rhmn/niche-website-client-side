import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeProduct from '../../Home/HomeProduct.js/HomeProduct';

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://mountain-bike-server.onrender.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container sx={{ padding: '60px 0', marginBottom: 6 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <HomeProduct key={product._id} product={product}></HomeProduct>
        ))}
      </Grid>
    </Container>
  );
};

export default ExploreProducts;
