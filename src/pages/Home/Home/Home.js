import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutAdventure from '../AboutAdventure/AboutAdventure';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <AboutAdventure></AboutAdventure>
            <HomeProducts></HomeProducts>
        </>
    );
};

export default Home;