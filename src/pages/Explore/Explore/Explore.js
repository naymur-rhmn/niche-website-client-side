import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ExploreProducts from '../ExploreProducts/ExploreProducts';

const Explore = () => {
    return (
        <>
            <Navigation></Navigation>
            <ExploreProducts></ExploreProducts>
            <Footer></Footer>
        </>
    );
};

export default Explore;