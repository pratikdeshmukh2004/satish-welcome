import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import Products from '../components/Products';
import Navigation from '../components/Navigation';

const WelcomeScreen = () => {
    return <>
        <Header />
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/products' element={<Products/>} />
            </Routes>
        </BrowserRouter>
    </>
}
export default WelcomeScreen;