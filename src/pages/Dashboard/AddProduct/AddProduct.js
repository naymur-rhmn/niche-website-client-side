import { Grid, TextField, Typography, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProduct = () => {
    const [productInfo, setProductInfo] = useState();
    const [success, setSuccess] = useState(false);

    const getAddProductInput = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        const newValue = { ...productInfo };
        newValue[type] = value;
        setProductInfo(newValue);
    }

    const handleAddProduct = e => {
        e.preventDefault();
        fetch('https://ancient-basin-83605.herokuapp.com/product', {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
                else {
                    setSuccess(false)
                }
            })
    }


    return (
        <>

            <Box
                sx={{ padding: "50px 10%" }}
            >
                <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }} variant="h5">Add a Product</Typography>
                {success && <Alert sx={{ marginBottom: 3 }} severity="info">Product Addeded Successfully</Alert>}
                <form onSubmit={handleAddProduct}>
                    <Grid sx={{ marginBottom: 3 }} container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{ marginBottom: '5px' }} variant="body1">Product Name:</Typography>
                            <TextField
                                fullWidth
                                label="Title"
                                type="text"
                                name="title"
                                onBlur={getAddProductInput}
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{ marginBottom: '5px' }} variant="body1">Product Model:</Typography>
                            <TextField
                                fullWidth
                                label="Model"
                                type="text"
                                name="pd_code"
                                onBlur={getAddProductInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginBottom: 3 }} container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{ marginBottom: '5px' }} variant="body1">Product Price:</Typography>
                            <TextField
                                fullWidth
                                label="Price"
                                type="number"
                                name="price"
                                onBlur={getAddProductInput}
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Typography sx={{ marginBottom: '5px' }} variant="body1">Product Image:</Typography>
                            <TextField
                                fullWidth
                                label="Img link"
                                type="text"
                                name="img_main"
                                onBlur={getAddProductInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Typography sx={{ marginBottom: '5px' }} variant="body1">Product Description:</Typography>
                            <TextField
                                fullWidth
                                label="Description"
                                type="text"
                                name="description"
                                onBlur={getAddProductInput}
                            />
                        </Grid>
                    </Grid>

                    <Button type="submit" sx={{ marginTop: 3 }} size="large" variant="contained">Add Product</Button>
                </form>
            </Box>
        </>
    );
};

export default AddProduct;