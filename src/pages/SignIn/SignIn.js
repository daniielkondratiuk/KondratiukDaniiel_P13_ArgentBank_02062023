import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import './SignIn.css'
import AuthService from "../../services/authService"
import {useDispatch} from "react-redux"
import {login} from "../../features/authSlice"

const auth = new AuthService()
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await auth.login({email, password})
        dispatch(login({
            token: data.body.token
        }))
        if (data.body.token) {
            navigate("/profile")
        }
    }

    return (
        <div className="main bg-dark">
            <div className="sign-in-content">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
