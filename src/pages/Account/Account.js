import React, {useEffect, useState} from 'react'
import "./Account.css"
import {useDispatch, useSelector} from "react-redux"
import {selectToken} from "../../features/authSlice"
import userService from "../../services/userService"
import {getDataProfile, updateDataProfile} from "../../features/userSlice"

function Account({userData, fetchUserData}) {
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const userLoader = new userService(token)
    useEffect(()=>{
        if (userData){
            dispatch(getDataProfile(userData))
        }
    },[userData])
    const editHandler = async () => {

        if (firstName && lastName) {
            const response = await userLoader.editUserData({firstName, lastName})
            if (response.status === 200) {
                editCancel()
                dispatch(updateDataProfile(response.body))
                fetchUserData()
            }
        } else {
            alert('Merci de remplir tous les champs')
        }
    }
    const editCancel = () => {
        setFirstName('')
        setLastName('')
        setIsEditing(false)
    }

    if (!userData) {
        return <h1>Loading...</h1>
    }
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>{userData.firstName} {userData.lastName}!</h1>
                <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>Edit Name</button>
                {isEditing ?
                    <div className="edit-section">
                    <span className="edit-input">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                               type="text"/>
                    </span>
                        <span className="edit-input">
                        <label htmlFor="firstname">Last Name</label>
                        <input id="lastname"
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                               type="text"/>
                    </span>
                        <div className="edit-buttons">
                            <button className="edit-button"
                                    onClick={editHandler}>Save
                            </button>
                            <button className="edit-button-cancel" onClick={editCancel}>Cancel</button>
                        </div>
                    </div>
                    : ""
                }
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

    )
}

export default Account
