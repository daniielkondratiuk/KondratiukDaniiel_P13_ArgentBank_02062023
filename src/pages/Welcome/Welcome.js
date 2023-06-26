import React from 'react'
import Hero from "../../components/Hero/Hero"
import Features from "../../components/Feature/Features"
import Icon1 from "../../img/icon-chat.png"
import Icon2 from "../../img/icon-money.png"
import Icon3 from "../../img/icon-security.png"

const Welcome = () => {
    const featuresData = [
        {
            id: 1,
            icon: Icon1,
            title: 'You are our #1 priority',
            description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        },
        {
            id: 2,
            icon: Icon2,
            title: 'More savings means higher rates',
            description: 'The more you save with us, the higher your interest rate will be!'
        },
        {
            id: 3,
            icon: Icon3,
            title: 'Security you can trust',
            description: 'We use top of the line encryption to make sure your data and money is always safe.'
        }
    ]
    return (
        <div>
            <Hero/>
            <div className="main">
                <Features featuresData={featuresData}/>
            </div>
        </div>
    )
}

export default Welcome
