import React from 'react';
import Feature from "./Feature";
import './Features.css'

const Features = ({featuresData}) => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map(feature=>{
                return <Feature key={feature.id} {...feature}/>
            })}
        </section>
    );
};

export default Features;
