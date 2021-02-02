import React from 'react';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';

const ProductTable = () => {
    const handleDelete = () => {
        console.log('deleting');
    };
    return (
        <>
            <Space size={20} style={{ marginBottom: 16 }}>
                <Button type='primary' danger onClick={handleDelete}>
                    Delete selected
                </Button>
                <Button type='primary'>
                    <Link to='/dashboard/nowyprodukt'>Dodaj nową ofertę</Link>
                </Button>
            </Space>

            <Table dataSource={dataSource} columns={columns} />
        </>
    );
};

export default ProductTable;

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
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'Rabat',
        dataIndex: 'rabate',
        key: 'rabate',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
];

const dataSource = [
    {
        key: '1',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '2',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '3',
        name: 'Mieszanka na Białkowe naleśniki',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '4',
        name: 'Serwatka dietetyczna - Impact Diet Whey',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },

    {
        key: '5',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '6',
        name: 'Izolat Białka Serwatkowego Clear',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        key: '7',
        name: 'Mieszanka na Białkowe naleśniki',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '8',
        name: 'Serwatka dietetyczna - Impact Diet Whey',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },

    {
        key: '9',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '10',
        name: 'Izolat Białka Serwatkowego Clear',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        key: '11',
        name: 'Mieszanka na Białkowe naleśniki',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        key: '12',
        name: 'Serwatka dietetyczna - Impact Diet Whey',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },
];
