import React from 'react'
import Slide from './Slide'
import './slider.css';
import EmpireClinics from './EmpireClinics';
import AyurvedicConsulation from './AyurvedicConsulation';
import Appointment from './Appointment';

const Home = () => {
    return (
        <>
            <Slide />
            <EmpireClinics />
            <AyurvedicConsulation />
            <Appointment />
        </>
    )
}

export default Home
