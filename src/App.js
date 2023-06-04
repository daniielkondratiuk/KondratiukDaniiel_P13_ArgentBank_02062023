import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainNav from './components/MainNav/MainNav'
import SignIn from './pages/SignIn/SignIn'
import Footer from './components/Footer/Footer'
import Account from './pages/Account/Account'
import Welcome from "./pages/Welcome/Welcome"
import './App.css'
import Icon1 from './img/icon-chat.png'
import Icon2 from './img/icon-money.png'
import Icon3 from './img/icon-security.png'

function App() {
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
        <div className="app">
            <Router>
                <MainNav isLogin={true}/>
                <Routes>
                    <Route exact path={'/'} element={<Welcome featuresData={featuresData}/>}/>
                    <Route exact path={'/login'} element={<SignIn/>}/>
                    <Route exact path={'/profile'} element={<Account/>}/>
                    {/*TODO: Profile*/}
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
