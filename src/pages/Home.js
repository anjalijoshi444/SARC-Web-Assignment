import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';
import Lottie from "lottie-react";
import Animation from '../components/Animation.json';


const Home = () => (
<div className="home">
    <h2>Unlocking Your Dream Home</h2>
    <AwesomeSlider>
    <div data-src="/images/interior2.jpg" />
    <div data-src="/images/interior1.jpg" />
    <div data-src="/images/interior3.jpg" />
    </AwesomeSlider>
</div>
);

export default Home;
