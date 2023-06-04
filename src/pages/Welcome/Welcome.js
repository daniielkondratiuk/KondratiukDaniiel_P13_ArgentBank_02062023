import React from 'react';
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Feature/Features";

const Welcome = ({featuresData}) => {
    return (
        <div>
            <Hero/>
            <div className="main">
                <Features featuresData={featuresData}/>
            </div>
        </div>
    );
};

export default Welcome;
