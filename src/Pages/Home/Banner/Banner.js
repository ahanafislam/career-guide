import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='position-relative' style={{maxHeight: "550px"}}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <div className="position-absolute top-50 start-50 translate-middle carousel-container">
                    <div className="w-50">
                        <h1 className="banner-heading">Find Your Ideal Career</h1>
                        <p className="banner-text">Are you stuck in a job you don't enjoy? Not sure which career direction to take? If you want to have a job you are passionate about, well, you can!</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='position-relative' style={{maxHeight: "550px"}}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <div className="position-absolute top-50 start-50 translate-middle carousel-container">
                    <div className="w-50">
                        <h1 className="banner-heading">Plan for your success</h1>
                        <p className="banner-text">Find out for sure whether you’re in the right career. Is your dissatisfaction a passing phase or is it a sign it’s time to move on?</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='position-relative' style={{maxHeight: "550px"}}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <div className="position-absolute top-50 start-50 translate-middle carousel-container">
                    <div className="w-50">
                        <h1 className="banner-heading">Put it into perspective.</h1>
                        <p className="banner-text">On the professional scene, many times we may not feel we have the support we need during difficult times. Achieving professional goals can be difficult and stressful.</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;