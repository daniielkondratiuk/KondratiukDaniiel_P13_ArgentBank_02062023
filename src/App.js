import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import MainNav from './components/MainNav/MainNav'
import SignIn from './pages/SignIn/SignIn'
import Footer from './components/Footer/Footer'
import Account from './pages/Account/Account'
import Welcome from "./pages/Welcome/Welcome"
import {useSelector} from "react-redux"
import {selectToken} from "./features/authSlice"
import userService from "./services/userService"

import './App.css'
import {selectUser} from "./features/userSlice"


function App() {
    const [userData, setUserData] = useState(null)
    const token = useSelector(selectToken)
    const userName = useSelector(selectUser)
    const userLoader = new userService(token)


    useEffect(() => {
        if (token) {
            fetchUserData()
        }
    }, [token])
    const fetchUserData = async () => setUserData(await userLoader.getUserData())
    return (
        <div className="app">
            <Router>
                <MainNav isLogin={token} userName={userName}/>
                <Routes>
                    <Route exact path={'/'} element={<Welcome/>}/>
                    <Route exact path={'/login'} element={<SignIn/>}/>
                    <Route exact path={'/profile'}
                           element={token ? <Account userData={userData} fetchUserData={fetchUserData}/> :
                               <Navigate replace to="/login"/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
