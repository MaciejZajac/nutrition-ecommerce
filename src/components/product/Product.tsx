import React from 'react';
import { Card, Rate } from 'antd';

import Meta from 'antd/lib/card/Meta';

import { IProduct } from '../../pages/home/HomePage';

interface IProductProps {
    product: IProduct;
}

const Product = ({ product }: IProductProps) => {
    return (
        <Card hoverable cover={<img alt={product.name} src={product.imageUrl} />}>
            <Meta
                title={product.name}
                description={
                    <div>
                        <div>
                            <Rate disabled defaultValue={product.rating} style={{ fontSize: '14px' }} />
                        </div>
                        {product.rabate ? (
                            <span>
                                <strong>35%</strong> rabatu z kodem{' '}
                                <span style={{ color: 'red', fontWeight: 700 }}>{product.rabate}</span>
                            </span>
                        ) : (
                            <span>
                                Rabat <strong>10%</strong> na pierwsze zakupy
                            </span>
                        )}
                    </div>
                }
            />
            <div style={{ fontWeight: 700, fontSize: '20', marginTop: '4px' }}>Cena od {product.price} zł</div>
        </Card>
    );
};

export default Product;
