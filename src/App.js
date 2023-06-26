import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import MainNav from './components/MainNav/MainNav'
import SignIn from './pages/SignIn/SignIn'
import Footer from './components/Footer/Footer'
import Account from './pages/Account/Account'
import Welcome from "./pages/Welcome/Welcome"
import {useSelector} from "react-redux"
import {selectToken} from "./features/authSlice"

import './App.css'


function App() {
    const token = useSelector(selectToken)
    return (
        <div className="app">
            <Router>
                <MainNav isLogin={token}/>
                <Routes>
                    <Route exact path={'/'} element={<Welcome/>}/>
                    <Route exact path={'/login'} element={<SignIn/>}/>
                    <Route exact path={'/profile'} element={token ? <Account/> : <Navigate replace to="/login"/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
