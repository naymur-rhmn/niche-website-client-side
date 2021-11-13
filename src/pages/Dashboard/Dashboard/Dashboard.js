import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrder from '../../Order/MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddProduct from '../AddProduct/AddProduct';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StoreIcon from '@mui/icons-material/Store';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
const drawerWidth = 240;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const history = useHistory();


    const handleLogout = () => {
        logOut(history)
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link style={{ textDecoration: 'none', color: '#707070' }} to='/'>
                    <ListItem button >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                {
                    !admin ?
                        <Box>
                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ShoppingBagIcon />
                                    </ListItemIcon>
                                    <ListItemText>My Orders</ListItemText>
                                </ListItem>
                            </Link>

                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}/payment`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <PaymentsIcon />
                                    </ListItemIcon>
                                    <ListItemText>Pay</ListItemText>
                                </ListItem>
                            </Link>

                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}/reviews`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ReviewsIcon />
                                    </ListItemIcon>
                                    <ListItemText>Reviews</ListItemText>
                                </ListItem>
                            </Link>
                        </Box>
                        :
                        <Box>
                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}/manageAllOrders`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <ConfirmationNumberIcon />
                                    </ListItemIcon>
                                    <ListItemText>Manage All Orders</ListItemText>
                                </ListItem>
                            </Link>

                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}/addProduct`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <StorefrontIcon />
                                    </ListItemIcon>
                                    <ListItemText>Add a product</ListItemText>
                                </ListItem>
                            </Link>

                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}/manageProducts`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <StoreIcon />
                                    </ListItemIcon>
                                    <ListItemText>Manage Products</ListItemText>
                                </ListItem>
                            </Link>

                            <Link style={{ textDecoration: 'none', color: '#707070' }} to={`${url}/makeAdmin`}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <SupervisorAccountIcon />
                                    </ListItemIcon>
                                    <ListItemText>Make Admin</ListItemText>
                                </ListItem>
                            </Link>
                        </Box>
                }



                <ListItem onClick={handleLogout} button >
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route exact path={path}>
                        {
                            admin ? <ManageOrder></ManageOrder> : <MyOrder></MyOrder>
                        }
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
