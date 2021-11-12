import { Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box>
            <Box sx={{ backgroundColor: '#222222' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Typography color="#FFB800" variant="h5" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
                                MountainBike
                            </Typography>
                            <Typography color="#F7F7F7" variant="body1">Lectus ac pulvinar tincidunt accumsan ulla lectus facilis isaclect Molestieuam ublandit vulputatctus in sit egestas dolor purus tincidunt.</Typography>
                            <Typography sx={{ marginTop: 3 }} color="#FFB800" variant="h6">Contact</Typography>
                            <List>
                                <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                    <ListItemIcon>
                                        <RoomIcon style={{ color: '#F7F7F7' }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ marginLeft: '-15px', color: '#F7F7F7', textDecoration: 'none' }}>4200 Hamill Avenue, San Diego, California 92109</ListItemText>
                                </ListItem>
                                <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                    <ListItemIcon>
                                        <PhoneIcon style={{ color: '#F7F7F7' }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ marginLeft: '-15px', color: '#F7F7F7', textDecoration: 'none' }}>021 3456 789</ListItemText>
                                </ListItem>
                                <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                    <ListItemIcon>
                                        <EmailIcon style={{ color: '#F7F7F7' }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ marginLeft: '-15px', color: '#F7F7F7', textDecoration: 'none' }}>customer@roadpedal.com</ListItemText>
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <Typography color="#FFB800" variant="h6">ABOUT US</Typography>
                                    <List>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>About Us</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Contact Us</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Blog</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Order history</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Terms & Condition</Link>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <Typography color="#FFB800" variant="h6">CUSTOMER SERVICE</Typography>
                                    <List>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Shipping Policy</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Compensation First</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Delivery Information</Link>
                                        </ListItem>

                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <Typography color="#FFB800" variant="h6">Menu</Typography>
                                    <List>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Home</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Services</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Shop</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Blog</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Contact</Link>
                                        </ListItem>

                                    </List>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <Typography color="#FFB800" variant="h6">Services</Typography>
                                    <List>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Bike Repair</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Bike Fitting</Link>
                                        </ListItem>
                                        <ListItem sx={{ fontWeight: '500', paddingLeft: 0 }}>
                                            <Link style={{ color: '#F7F7F7', textDecoration: 'none' }}>Bike Rentel</Link>
                                        </ListItem>

                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />
            <Box padding={3} sx={{ backgroundColor: '#222222' }}>
                <Container maxWidth="xl">
                    <Typography color="#858688" variant="body2">© Copyright 2021 Naymur Rahman</Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;