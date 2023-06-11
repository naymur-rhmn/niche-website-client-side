import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const ManageOrder = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch('https://mountain-bike-server.onrender.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [success]);

  // delete order
  const deleteOrder = (id) => {
    const proceed = window.confirm('Are you want to cancel Order?');
    if (proceed) {
      const url = `https://mountain-bike-server.onrender.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setSuccess(!success);
          }
        });
    }
  };

  const approveOrder = (id) => {
    const url = `https://mountain-bike-server.onrender.com/orders/${id}`;
    fetch(url, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setSuccess(!success);
        }
      });
  };

  return (
    <>
      <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }} variant='h5'>
        Manage All orders
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Bycicle</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Model</TableCell>
              <TableCell align='center'>Price/per</TableCell>
              <TableCell align='center'>Quantity</TableCell>
              <TableCell align='center'>Phone</TableCell>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((pd) => (
              <TableRow
                key={pd._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <img style={{ maxWidth: '100px' }} src={pd.img} alt='' />
                </TableCell>
                <TableCell align='center'>{pd.title}</TableCell>
                <TableCell align='center'>{pd.model}</TableCell>
                <TableCell align='center'>{pd.price}</TableCell>
                <TableCell align='center'>{pd.quantity}</TableCell>
                <TableCell align='center'>{pd.phone}</TableCell>
                <TableCell align='center'>{pd.date}</TableCell>

                <TableCell align='center'>
                  <Typography
                    component={'span'}
                    variant='body1'
                    sx={{
                      color: 'white',
                      backgroundColor: '#A9D5DF',
                      display: 'inline-block',
                      padding: '0px 10%',
                    }}
                  >
                    {pd?.status}
                  </Typography>
                </TableCell>

                <TableCell align='center'>
                  <Button
                    style={{ margin: '2px 2px' }}
                    variant='outlined'
                    color='info'
                    onClick={() => approveOrder(pd._id)}
                    sx={{ color: 'info' }}
                  >
                    Approve
                  </Button>

                  <Button
                    style={{
                      margin: '2px 2px',
                      paddingLeft: '20px',
                      paddingRight: '20px',
                    }}
                    variant='outlined'
                    color='error'
                    onClick={() => deleteOrder(pd._id)}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageOrder;
