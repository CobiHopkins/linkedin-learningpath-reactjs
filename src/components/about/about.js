import React from 'react';
import Navigation from '../navigation/navigation';
import { Outlet } from 'react-router-dom';

export function History() {
    return (
        <div>
            <h1>Our History</h1>
        </div>
    );
};

export function About() {
    return (
        <div>
            <Navigation />
            <h1>About Us</h1>
            <Outlet />
        </div>
    )
};