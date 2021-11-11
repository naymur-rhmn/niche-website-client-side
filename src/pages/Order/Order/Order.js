import { Grid, Button, Container, Typography, TextField, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Order = () => {
    const [confirmation, setConfirmation] = useState(false);
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const [orderData, setOrderData] = useState();
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const getInput = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newValue = { ...orderData };
        newValue[type] = value;
        setOrderData(newValue);
        console.log(newValue);
    }


    const handleOrder = (e) => {
        e.preventDefault();
        const orderInfo = { pdId: productId, name: user.displayName, email: user.email, status: "Pending", ...orderData };
        console.log(orderInfo);

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setConfirmation(true);
                }
            });


    }


    return (
        <>
            <Navigation></Navigation>
            {confirmation && <Typography align="center"><Alert fullWidth severity="success">This is a success alert — check it out!</Alert></Typography>}
            <Box sx={{ mx: '28px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={9} md={8} sm={12} xs={12}>

                        <Grid container spacing={1}>

                            <Grid item lg={7} md={6} sm={5} xs={12}>
                                <img style={{ width: '100%' }} src={product.img_main} alt="" />
                            </Grid>

                            <Grid item lg={5} md={6} sm={7} xs={12}>
                                <Typography variant="h4">
                                    {product.title}
                                </Typography>
                                <Typography variant="h6">
                                    ${product.price}
                                </Typography>
                                <Box>
                                    <Typography>
                                        {product.description}
                                    </Typography>
                                </Box>
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Box sx={{ backgroundColor: '#EDF7ED', padding: '12px' }} padding={5} >
                            <Typography align="center" variant="h5" sx={{ fontWeight: 'bold' }}>PLACE ORDER</Typography>
                            <form onSubmit={handleOrder}>
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    label="Name"
                                    type="text"
                                    name="name"
                                    onBlur={getInput}
                                    defaultValue={user.displayName}
                                    disabled
                                />
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    name="email"
                                    onBlur={getInput}
                                    defaultValue={user.email}
                                    disabled
                                />
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    label="Phone"
                                    type="tel"
                                    name="phone"
                                    onBlur={getInput}
                                />
                                <TextField
                                    margin="dense"
                                    fullWidth
                                    label="Quantity"
                                    type="number"
                                    name="quantity"
                                    onBlur={getInput}

                                />
                                <Button type="submit" fullWidth variant="contained">Order now</Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Order;