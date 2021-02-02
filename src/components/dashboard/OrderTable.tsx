import React from 'react';
import { Button, Table } from 'antd';

const OrderTable = () => {
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default OrderTable;

const columns = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Zamawiający',
        dataIndex: 'orderedBy',
        key: 'orderedBy',
    },
    {
        title: 'Zrealizowano',
        dataIndex: 'isComplete',
        key: 'isComplete',
    },
    {
        title: 'Action',
        key: 'operation',
        width: 100,
        render: () => <a>action</a>,
    },
];

const dataSource = [
    {
        key: '1',
        orderedBy: 'Karolina',
        isComplete: 'Tak',
    },
    {
        key: '2',
        orderedBy: 'Magda',
        isComplete: 'Nie',
    },
    {
        key: '3',
        orderedBy: 'Karol',
        isComplete: 'Nie',
    },
];
