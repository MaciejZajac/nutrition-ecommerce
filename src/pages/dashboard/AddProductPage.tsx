import { Col, message, Row, Form, Select, Input, InputNumber, Button, PageHeader } from 'antd';
import React, { useState } from 'react';

const AddProductPage = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = (values: any) => {
        setLoading(true);
        try {
            const { email, password } = values;
            // login({ email, password, roleName: 'COMPANY' });
            setLoading(false);
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
                <PageHeader onBack={() => window.history.back()} title='Dodaj nową ofertę' />
                <Form
                    name='basic'
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item name='name' label='Nazwa'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Kategoria' name='category'>
                        <Select>
                            <Select.Option value='demo'>Demo</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label='Cena' name='price'>
                        <InputNumber />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' size='large' htmlType='submit' loading={loading}>
                            Dodaj produt
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default AddProductPage;
