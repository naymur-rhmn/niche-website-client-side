import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const ManageProducts = () => {
    const [Products, setProducts] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('https://ancient-basin-83605.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [success])


    // delete order
    const deleteProduct = (id) => {
        const proceed = window.confirm("Are you want to cancel Order?");
        if (proceed) {
            const url = `https://ancient-basin-83605.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSuccess(!success);
                    }
                })
        }
    }


    return (
        <>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }} variant="h5">Manage Products</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bycicle</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Model</TableCell>
                            <TableCell align="center">Price/per</TableCell>
                            <TableCell align="center">Option</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Products.map(pd => (
                            <TableRow
                                key={pd._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"><img style={{ maxWidth: "100px" }} src={pd.img_main} alt="" /></TableCell>
                                <TableCell align="center">{pd.title}</TableCell>
                                <TableCell align="center">{pd.pd_code}</TableCell>
                                <TableCell align="center">{pd.price}</TableCell>

                                <TableCell align="center">
                                    <Button style={{ margin: '2px 2px', paddingLeft: '20px', paddingRight: '20px' }} variant="outlined" color="error" onClick={() => deleteProduct(pd._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ManageProducts;