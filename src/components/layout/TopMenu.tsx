import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const TopMenu = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto' }}>
            <Menu mode='horizontal'>
                <Menu.Item icon={<AppstoreOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
            </Menu>

            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link to='/dashboard'>Dashboard</Link>
                </Menu.Item>
                <SubMenu icon={<SettingOutlined />} title='Konto'>
                    <Menu.Item>
                        <Link to='/login'>Zaloguj</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/register'>Rejestracja</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default TopMenu;
