import React, { FC } from 'react';
import { Layout } from 'antd';
import TopMenu from './TopMenu';

const { Header, Footer, Content } = Layout;

const LayoutWrapper: FC = ({ children }) => {
    return (
        <Layout style={{ background: 'none' }}>
            <Header style={{ background: 'none' }}>
                <TopMenu />
            </Header>

            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default LayoutWrapper;
