import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AboutCoach from '../AboutCoach/AboutCoach';

const Home = () => {
    return (
        <>  
            <Banner></Banner>
            <AboutCoach></AboutCoach>
            <Services></Services>
        </>
    );
};

export default Home;