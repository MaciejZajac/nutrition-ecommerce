import React, { useContext, useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message, Row, Col } from 'antd';
// import { UserContext } from '../../context/UserContext';

const LoginPage = () => {
    // const { login } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

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
        <Row style={{ marginTop: '2rem' }}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 8 }}>
                <Form
                    name='basic'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Typography.Title level={2}>Logowanie</Typography.Title>
                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' loading={loading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default LoginPage;
