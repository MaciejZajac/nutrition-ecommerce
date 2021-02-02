import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutWrapper from './components/layout/Layout';
import 'antd/dist/antd.css';
import Router from './router';

const App = () => {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Router />
            </LayoutWrapper>
        </BrowserRouter>
    );
};

export default App;
