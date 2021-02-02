import { Col, Row, Tabs, Typography } from 'antd';
import OrderTable from '../../components/dashboard/OrderTable';
import ProductTable from '../../components/dashboard/ProductTable';
import UserTable from '../../components/dashboard/UserTable';
const { TabPane } = Tabs;

const DashboardPage = () => {
    return (
        <Row style={{ margin: '3rem 0' }}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }}>
                <Tabs defaultActiveKey='1'>
                    <TabPane tab='Produkty' key='1'>
                        <Typography.Title level={3}>Produkty w systemie</Typography.Title>
                        <ProductTable />
                    </TabPane>
                    <TabPane tab='Użytkownicy' key='2'>
                        <Typography.Title level={3}>Użytkownicy</Typography.Title>
                        <UserTable />
                    </TabPane>
                    <TabPane tab='Zamówienia' key='3'>
                        <Typography.Title level={3}>Zamówienia</Typography.Title>
                        <OrderTable />
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    );
};

export default DashboardPage;
