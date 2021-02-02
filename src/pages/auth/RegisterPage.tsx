import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col, Typography } from 'antd';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
    // const history = useHistory();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const { email, password } = values;
            // await axios
            //     .post(`/user/register`, {
            //         email,
            //         password,
            //     })
            //     .then((response) => response.data);
            setLoading(false);
            message.success('Udało się stworzyć użytkownika');

            // history.push('/login');
        } catch (err) {
            message.error('Coś się nie udało');
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <Row style={{ marginTop: '2rem' }}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
                <Typography.Title level={2}>Rejestracja</Typography.Title>
                <Form
                    name='basic'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Hasło'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' loading={loading}>
                            Zarejestruj
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default RegisterPage;
