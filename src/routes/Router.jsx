import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
                exact
                path="/checkout/information"
                element={<Information />}
            />
            <Route exact path="/checkcout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />
            <Route element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
