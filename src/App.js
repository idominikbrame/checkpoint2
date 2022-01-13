import React from 'react';
import Navigation from './Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Router />
        </BrowserRouter>
    );
}

export default App;
