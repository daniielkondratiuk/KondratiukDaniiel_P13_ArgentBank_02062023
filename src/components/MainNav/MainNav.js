import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/argentBankLogo.png'
import './MainNav.css'
import {useDispatch} from "react-redux";
import {logout} from "../../features/authSlice"

function MainNav({ isLogin, userName = 'Tony' }) {
    const dispatch = useDispatch()
    const handleLogout = async (e) => {
        dispatch(logout())
    }
    return (
        <nav className="main-nav">
            <div className="main-nav-logo">
                <NavLink to="/" className="main-nav-item">
                    <img src={Logo} alt="Logo" className="main-nav-logo-image" />
                </NavLink>
                <h1 className="sr-only">Argent Bank</h1>
            </div>
            {isLogin ? (
                <div className="main-nav-menu">
                    <NavLink to="/profile" className="main-nav-item">
                        <i className="fa fa-user-circle"></i> {userName}
                    </NavLink>
                    <NavLink to="/login" onClick={handleLogout} className="main-nav-item">
                        <i className="fa fa-sign-out"></i> Logout
                    </NavLink>
                </div>
            ) : (
                <div className="main-nav-menu">
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i> Sign In
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default MainNav
