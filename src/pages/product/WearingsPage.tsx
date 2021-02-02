import React from 'react';
import { Col, Row, Typography } from 'antd';
import { IProduct } from '../home/HomePage';
import { Link } from 'react-router-dom';
import Product from '../../components/product/Product';

const WearingsPage = () => {
    return (
        <Row>
            <Col
                style={{ margin: '20px auto' }}
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 18, offset: 3 }}
                xl={{ span: 16, offset: 4 }}
            >
                <Typography.Title level={1}>Ciuszki</Typography.Title>
                <Row gutter={24}>
                    {items.map((product) => (
                        <Col
                            style={{ margin: '15px 0' }}
                            key={product._id}
                            xs={{ span: 24 }}
                            sm={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 6 }}
                        >
                            <Link to={`/product/${product._id}`}>
                                <Product product={product} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default WearingsPage;

const items: IProduct[] = [
    {
        _id: '1',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '2',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        _id: '3',
        name: 'Legginsy MP Essentials - Danger',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '4',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s2.thcdn.com/productimg/300/300/12234391-7894807989940695.jpg',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },

    {
        _id: '5',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '6',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        _id: '7',
        name: 'Legginsy MP Essentials - Danger',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '8',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s2.thcdn.com/productimg/300/300/12234391-7894807989940695.jpg',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },

    {
        _id: '9',
        name: 'Bezrękawnik MP Essentials Drop Armhole - Biały',
        imageUrl: 'https://s4.thcdn.com/productimg/300/300/12302926-1644807812825291.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
];
