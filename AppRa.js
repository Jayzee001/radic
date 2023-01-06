import React from 'react'
import Screen from "../src/Pages/Screenone"
import "./App.css";
import "./index.css"
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Left from './NavBars/Left_Nav';


function AppRa() {
return (
    <Router>
        <Left />
        <Routes>
            {/* <div className='app' > */}
                <Route path="/" element={<Screen />} />
            {/* </div> */}
        </Routes>
    </Router>
)
}

export default AppRa
// src\Pages\RadicalX-Internship-flow\Screenone.js