import React from 'react';
import { Button, Table } from 'antd';

const UserTable = () => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default UserTable;

const columns = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Liczba zamówień',
        dataIndex: 'ordersNumber',
        key: 'ordersNumber',
    },
];

const dataSource = [
    {
        key: '1',
        name: 'Karolina',
        email: 'Karolina@gmail.com',
        ordersNumber: 3,
    },
    {
        key: '2',
        name: 'Magda',
        email: 'Magda@gmail.com',
        ordersNumber: 1,
    },
    {
        key: '3',
        name: 'Karol',
        email: 'Karol@gmail.com',
        ordersNumber: 13,
    },
];
