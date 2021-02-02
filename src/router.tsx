import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AddProductPage from './pages/dashboard/AddProductPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import HomePage from './pages/home/HomePage';
import ProductPage from './pages/product/ProductPage';

const router = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/product/:id' component={ProductPage} />
            <Route exact path='/register' component={RegisterPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/dashboard' component={DashboardPage} />
            <Route exact path='/dashboard/nowyprodukt' component={AddProductPage} />
        </Switch>
    );
};

export default router;
