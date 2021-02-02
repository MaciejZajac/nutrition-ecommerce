import { Col, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../../components/product/Product';

export interface IProduct {
    _id: string;
    name: string;
    imageUrl: string;
    rating: number;
    price: number;
    rabate: string;
}

const HomePage = () => {
    return (
        <Row>
            <Col
                style={{ margin: '20px auto' }}
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 18, offset: 3 }}
                xl={{ span: 16, offset: 4 }}
            >
                <Typography.Title level={1} style={{ textAlign: 'center' }}>
                    Bestsellery
                </Typography.Title>
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

export default HomePage;

const items: IProduct[] = [
    {
        _id: '1',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '2',
        name: 'Izolat Białka Serwatkowego Clear',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        _id: '3',
        name: 'Mieszanka na Białkowe naleśniki',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '4',
        name: 'Serwatka dietetyczna - Impact Diet Whey',
        imageUrl: 'https://s2.thcdn.com/productimg/300/300/12081395-1294792246594509.jpg',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },

    {
        _id: '5',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '6',
        name: 'Izolat Białka Serwatkowego Clear',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        _id: '7',
        name: 'Mieszanka na Białkowe naleśniki',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '8',
        name: 'Serwatka dietetyczna - Impact Diet Whey',
        imageUrl: 'https://s2.thcdn.com/productimg/300/300/12081395-1294792246594509.jpg',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },

    {
        _id: '9',
        name: 'Białko serwatkowe (Impact Whey Protein)',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '10',
        name: 'Izolat Białka Serwatkowego Clear',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 109.0,
    },
    {
        _id: '11',
        name: 'Mieszanka na Białkowe naleśniki',
        imageUrl: 'https://s1.thcdn.com/productimg/300/300/10530943-1504726884876366.jpg',
        rating: 4,
        rabate: '35PL',
        price: 39.0,
    },
    {
        _id: '12',
        name: 'Serwatka dietetyczna - Impact Diet Whey',
        imageUrl: 'https://s2.thcdn.com/productimg/300/300/12081395-1294792246594509.jpg',
        rating: 4,
        rabate: '35PL',
        price: 29.0,
    },
];
