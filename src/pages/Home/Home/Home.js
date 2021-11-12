import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutAdventure from '../AboutAdventure/AboutAdventure';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutAdventure></AboutAdventure>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <Footer></Footer>
        </>
    );
};

export default Home;