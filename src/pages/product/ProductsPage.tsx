import React from 'react';
import { Col, Row, Typography, Form, Input, Button, Select } from 'antd';
import { IProduct } from '../home/HomePage';
import { Link } from 'react-router-dom';
import Product from '../../components/product/Product';

const ProductsPage = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <Row>
            <Col
                style={{ margin: '20px auto' }}
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                lg={{ span: 18, offset: 3 }}
                xl={{ span: 16, offset: 4 }}
            >
                <Typography.Title level={1}>Odżyweczki</Typography.Title>
                <Row>
                    <Form onFinish={onFinish} layout='inline'>
                        <Form.Item name='order' label='Sortuj'>
                            <Select defaultValue='popularnosc' style={{ width: 200 }}>
                                <Select.Option value='trafnosc'>Trafność</Select.Option>
                                <Select.Option value='popularnosc'>Popularność</Select.Option>
                                <Select.Option value='lowerprice'>Cena: od niskiej do wysokiej</Select.Option>
                                <Select.Option value='higherprice'>Cena: od wysokiej do niskiej</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Filtruj
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
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

export default ProductsPage;

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
];
