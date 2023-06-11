import {
  Grid,
  Button,
  Typography,
  TextField,
  Alert,
  Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  lineThrough: {
    textDecoration: 'line-through',
    color: '#C3C1B7',
  },
});

const Order = () => {
  const classes = useStyles();
  const [confirmation, setConfirmation] = useState(false);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [orderData, setOrderData] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://mountain-bike-server.onrender.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const getInput = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    const newValue = { ...orderData };
    newValue[type] = value;
    setOrderData(newValue);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const orderDate = new Date();
    console.log(orderDate.toLocaleDateString());
    const orderInfo = {
      pdId: productId,
      title: product.title,
      img: product.img_main,
      model: product.pd_code,
      userName: user.displayName,
      price: product.price,
      email: user.email,
      status: 'Pending',
      date: orderDate.toLocaleDateString(),
      ...orderData,
    };

    fetch('https://mountain-bike-server.onrender.com/order', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setConfirmation(true);
        }
      });
  };

  return (
    <>
      <Navigation></Navigation>
      {confirmation && (
        <Alert severity='success'>Order placed Successfully</Alert>
      )}
      <Box
        sx={{ mx: '28px', marginBottom: 2, paddingTop: 15, paddingBottom: 10 }}
      >
        <Grid container spacing={2}>
          <Grid item lg={9} md={8} sm={12} xs={12}>
            <Grid container spacing={1}>
              <Grid item lg={7} md={6} sm={5} xs={12}>
                <img style={{ width: '100%' }} src={product.img_main} alt='' />
              </Grid>

              <Grid item lg={5} md={6} sm={7} xs={12}>
                <Typography
                  sx={{ fontWeight: 'bold', marginBottom: 2 }}
                  variant='h6'
                >
                  {product.title} (
                  <span style={{ color: '#FFB800' }}>{product.pd_code}</span>)
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    sx={{ marginRight: 2, fontWeight: 'bold' }}
                    variant='h4'
                  >
                    ${product.price}
                  </Typography>
                  <Typography
                    sx={{ paddingTop: 1.5, marginBottom: 2 }}
                    className={classes.lineThrough}
                    variant='body1'
                    color='gray'
                  >
                    ${product.price}
                  </Typography>
                </Box>
                <Typography variant='h6'></Typography>
                <Box>
                  <Typography sx={{ marginBottom: 2 }} variant='body1'>
                    {product.description}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
                  <Typography variant='body2'>
                    COLOR :{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      RED, WHITE, BLACK
                    </span>
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
                  <Typography sx={{ marginBottom: 1 }} variant='body2'>
                    SKU :{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      {product.pd_code}
                    </span>
                  </Typography>
                  <Typography sx={{ marginBottom: 1 }} variant='body2'>
                    CATEGORIES :{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      MOUNTAIN BIKE, BIKES
                    </span>
                  </Typography>
                  <Typography sx={{ marginBottom: 1 }} variant='body2'>
                    TAGS :{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      BIKES, CYCLE, RIDE
                    </span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={3} md={4} sm={12} xs={12}>
            <Box
              sx={{ backgroundColor: '#EDF7ED', padding: '16px 12px' }}
              padding={5}
            >
              <Typography
                align='center'
                variant='h5'
                sx={{ fontWeight: 'bold', marginBottom: 2 }}
              >
                PLACE ORDER
              </Typography>
              <form onSubmit={handleOrder}>
                <TextField
                  margin='dense'
                  fullWidth
                  label='Name'
                  type='text'
                  name='name'
                  onBlur={getInput}
                  defaultValue={user.displayName}
                  disabled
                />
                <TextField
                  margin='dense'
                  fullWidth
                  label='Email'
                  type='email'
                  name='email'
                  onBlur={getInput}
                  defaultValue={user.email}
                  disabled
                />
                <TextField
                  margin='dense'
                  fullWidth
                  label='Phone'
                  type='tel'
                  name='phone'
                  onBlur={getInput}
                  required
                />

                <TextField
                  margin='dense'
                  fullWidth
                  label='Address'
                  type='text'
                  name='address'
                  onBlur={getInput}
                  required
                />
                <TextField
                  margin='dense'
                  fullWidth
                  label='Postal Code'
                  type='number'
                  name='post_code'
                  onBlur={getInput}
                  required
                />
                <TextField
                  margin='dense'
                  fullWidth
                  label='Quantity'
                  type='number'
                  name='quantity'
                  onBlur={getInput}
                  required
                />
                <Button
                  size='large'
                  style={{ width: '100%', marginTop: 8 }}
                  type='submit'
                  variant='contained'
                >
                  Order now
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Box sx={{ paddingTop: 3, paddingBottom: 3, paddingRight: 10 }}>
            <Typography sx={{ marginBottom: 2 }} variant='h5'>
              Description
            </Typography>
            <Typography variant='body2'>
              Mauris non purus bibendum, auctor augue ut, bibendum metus.
              Praesent elementum libero tortor, vitae blandit ex imperdiet vel.
              Cras pretium, lectus quis venenatis fermentum, velit felis aliquam
              mauris, at pretium nulla sapien ac odio. Etiam scelerisque non
              tellus eget dictum. Fusce id ullamcorper felis. Curabitur
              facilisis varius arcu, in posuere turpis semper nec. Sed a massa
              at mi sagittis pulvinar. Nulla nunc sem, condimentum ut sem at,
              placerat porttitor orci. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Etiam nulla
              massa, pellentesque eget enim quis, consequat feugiat nibh.
              Integer eu dui varius, scelerisque magna eu, fermentum lacus.
              Maecenas quam diam, vulputate at molestie id, blandit non massa.
              Donec a consequat erat, at accumsan lacus. Vestibulum erat felis,
              cursus a turpis non, rutrum viverra odio.
            </Typography>
            <br />

            <Typography variant='body2'>
              In eu dapibus nibh.Integer nec finibus magna.Nullam porttitor sed
              ante ac pharetra.Sed pulvinar sollicitudin mauris quis
              commodo.Cras rhoncus mattis elit, eu tincidunt dui bibendum
              nec.Suspendisse justo nunc, commodo non lacinia nec, aliquam non
              mauris.Etiam sollicitudin nunc magna, vestibulum vehicula eros
              mollis vel.Sed tempor ligula nec libero consectetur porta.Mauris
              turpis dui, varius sed ligula sit amet, imperdiet feugiat
              neque.Praesent suscipit, nisi vel aliquam gravida, nisi neque
              dictum justo, in sollicitudin erat sem quis massa.Mauris sed
              ultricies erat, non pellentesque eros.Suspendisse nec neque
              metus.Aenean eget pulvinar augue.
            </Typography>
            <br />
            <Typography variant='body2'>
              Aliquam erat volutpat.Donec et lorem et sem tincidunt pulvinar
              vitae eu metus.Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.Nam ac felis ac ante
              pellentesque lacinia in vitae erat.Morbi pulvinar laoreet ante eu
              gravida.Duis at tempus dolor.Nullam porta non ipsum id
              dapibus.Integer vitae nisl convallis, tempus nisl quis, aliquet
              erat.Sed vitae ullamcorper augue, eget sodales nisi.Fusce vitae
              neque ac metus porttitor sagittis dignissim ut nulla.Nulla
              egestas, lorem et porta efficitur, mauris neque pulvinar neque,
              eget bibendum dui lacus vel metus.In faucibus cursus dolor vitae
              facilisis.Donec semper neque vitae magna luctus posuere.Integer
              blandit ut leo at fringilla.Sed dignissim lacus id ligula posuere,
              vel fermentum sapien aliquam.
            </Typography>
            <br />
            <Typography variant='body2'>
              Nam ullamcorper eu erat ut tincidunt.Sed sit amet dolor
              velit.Donec scelerisque dictum sapien lobortis vulputate.Curabitur
              pellentesque nulla ut sodales volutpat.Proin in mattis sem.Cras
              sed elementum sapien.Nulla lacus lacus, tristique sit amet iaculis
              eu, egestas vel sem.Nunc non elit fringilla, tempor justo vitae,
              volutpat enim.Fusce purus massa, mollis id sagittis non, lobortis
              ut dolor.In vestibulum odio ligula, ac interdum diam hendrerit
              sed.Mauris quis accumsan quam, in bibendum metus.Suspendisse ac
              ante sed lacus vestibulum ultricies.Fusce vitae felis ut sapien
              sollicitudin sodales sit amet id mi.Sed scelerisque metus metus,
              at finibus velit faucibus eget.Pellentesque luctus velit sed enim
              convallis pharetra.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Order;
