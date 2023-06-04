import React from 'react';

function Account({ title, amount, description }) {
    return (
        <div className="main bg-dark">
            <div className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{description}</p>
                </div>
                <button className="edit-button">Edit</button>
            </div>
        </div>
    );
}

export default Account;
