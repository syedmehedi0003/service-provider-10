import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Shakib1 from '../../../images/Banner/img1.jpg';
import Shakib2 from '../../../images/Banner/img2.jpg';
import Shakib3 from '../../../images/Banner/img3.jpg';


const Banner = () => {
    return (

        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Shakib2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Shakib Al Hasan</h3>
                    <p>Being a genuine all-rounder, Shakib is a vital cog in Bangladesh's line-up.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Shakib1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Shakib Al Hasan</h3>
                    <p>Shakib Al Hasan is without a doubt the biggest name to have emerged from Bangladesh cricket circles.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Shakib3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Shakib Al Hasan</h3>
                    <p> He has been a consistent performer for his country, over the years.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;