import React from 'react';
import logo from '../assets/logo.png';

export function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo" width="210" height="210" />
        </div>
    )
}
