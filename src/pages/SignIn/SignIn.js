import React from 'react';
import './SignIn.css'

function SignIn() {
    return (
        <div className="main bg-dark">
            <div className="sign-in-content">
                <h2>Sign In</h2>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
