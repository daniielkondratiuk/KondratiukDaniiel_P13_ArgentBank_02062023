import React, {useEffect, useState} from 'react';
import "./Account.css"
import {useSelector} from "react-redux";
import {selectToken} from "../../features/authSlice";
import userService from "../../services/userService";

function Account() {
    const [userData, setUserData] = useState(null)
    const token = useSelector(selectToken)
    const userLoader = new userService()

    const fetchUserData = async () => setUserData(await userLoader.getUserData(token))
    const editHandler = () => {
       const name = prompt('write name','')
       const lastname = prompt('write lastname','')
        console.log(name,lastname)
    }
    useEffect(() => {
        fetchUserData()
    }, []);
    if (!userData) {
        return <h1>Loading...</h1>
    }
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>{userData.firstName} {userData.lastName}!</h1>
                <button className="edit-button" onClick={()=>editHandler()}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>

    );
}

export default Account;
