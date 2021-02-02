import {
    Carousel,
    Col,
    Image,
    List,
    Rate,
    Row,
    Select,
    Tabs,
    Typography,
    Form,
    Button,
    InputNumber,
    Divider,
    Comment,
    PageHeader,
} from 'antd';
import React, { useState } from 'react';

const { TabPane } = Tabs;

interface IDetailProduct {
    _id: string;
    name: string;
    imageUrl: string[];
    description: string;
    advantages: string[];
    whyUse: string;
    price: number;
    rating: number;
    flavor: string[];
    advisedUsage: {
        title: string;
        text: string;
    }[];
    comments: {
        _id: string;
        text: string;
        date: string;
        userName: string;
        givenRate: number;
    }[];
}

const obj: IDetailProduct = {
    _id: '1',
    name: 'Białko Serwatkowe (Impact Whey Protein)',
    imageUrl: [
        'https://s4.thcdn.com///productimg/1600/1600/10530943-5604726884979938.jpg',
        'https://s4.thcdn.com///productimg/1600/1600/10530943-1504726884876366.jpg',
    ],
    description: `Wykonana z najlepszej serwatki, jedna porcja zawiera aż 21g białka, w przypadku protein potrzebujesz ich ze źródła wysokiej jakości – od tych samych krów,
     które dostarczają nam mleko i ser. Poddana jest zwykłemu 
     procesowi filtracji oraz suszeniu opryskowemu tworząc w ten
      sposób zupełnie naturalną odżywkę.`,
    advantages: ['21g białka w każdej porcji', '4,5g BCAA', 'Niska zawartość cukru'],
    whyUse: `
    Wygodne, wysokiej jakości białko wspomaga wzrost i utrzymanie masy ważnych mięśni1 — w każdej porcji zawiera tylko 1,9g tłuszczu, 1g węglowodanów oraz jedynie 103 kalorie, aby wspierać wszystkie Twoje cele treningowe.
    Zawiera również niezbędne aminokwasy, w tym 4,5g aminokwasy BCAA — naturalnie występujące w białku, które pomagają w budowie i regeneracji mięśni1  — dzięki temu zawsze będziesz w gotowości na kolejny trening.
    `,
    price: 39.0,
    rating: 5,
    flavor: ['czekolada', 'ciastko', 'wanilia'],
    advisedUsage: [
        {
            title: 'Kiedy przyjmować Białko Serwatkowe (Impact Whey Protein)?',
            text:
                'Jest to odżywka szybko przyswajalna, dlatego zalecamy spożywanie jej 30-60 minut po treningu, ale jest też doskonała o dowolnej porze dnia, aby uzupełnić niezbędne białko. Dodaj 1 miarkę (25g) do mleka pełnego lub wody.',
        },

        {
            title: 'Z czym stosować Białko Serwatkowe (Impact Whey Protein)?',
            text:
                "Aby pomóc Ci przejść przez nawet najtrudniejsze treningi dodaj miarkę  Monohydratu Kreatyny do Twojego shake'a – kreatyna ma udowodniony pozytywny wpływ na zwiększanie wydolności fizycznej podczas powtarzania serii krótkotrwałych i intensywnych ćwiczeń.",
        },
    ],
    comments: [
        {
            _id: '1',
            text:
                'To moje ulubione białko, wcześniej kupowałam biało dwóch innych firm, zostaję przy tym. Smak słony karmel póki co najbardziej mi odpowiada, polecam jak najbardziej!',
            date: '25.01.2020',
            userName: 'Magda',
            givenRate: 4,
        },

        {
            _id: '2',
            text:
                'Mega dobra rozpuszczalnosc, nie jest przeslodzone w smaku jak wszystkie inne bialka. Smaki, ktorych wybor jest duzy naprawde sa wyraziste. Najlepsza bialko jakie do tej pory wyszlo na rynek i to za niewielka cene.',
            date: '23.01.2020',
            userName: 'Pieseł',
            givenRate: 5,
        },

        {
            _id: '3',
            text:
                'Jadłem to białko jeszcze mieszkając w UK w między czasie testując różne inne ale żadne nie dawało mi takich efektów jak Impact od MyProtein do tego genialny smak vanili dla Moich wybrednych kubków smakowych',
            date: '21.01.2020',
            userName: 'Brs',
            givenRate: 4,
        },
    ],
};

const ProductPage = () => {
    const [product, setProduct] = useState<IDetailProduct>(obj);

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
            >
                <PageHeader onBack={() => window.history.back()} title={product.name} />
                <Row gutter={24}>
                    <Col
                        xs={{ span: 22, offset: 1 }}
                        sm={{ span: 16, offset: 0 }}
                        md={{ span: 14, offset: 0 }}
                        lg={{ span: 12, offset: 0 }}
                    >
                        <Carousel effect='fade'>
                            {product.imageUrl.map((url) => (
                                <Image src={url} alt='' />
                            ))}
                        </Carousel>

                        <Tabs defaultActiveKey='1'>
                            <TabPane tab='Opis' key='1'>
                                {product.description}
                            </TabPane>
                            <TabPane tab='Zalety' key='2'>
                                <List
                                    size='large'
                                    bordered
                                    dataSource={product.advantages}
                                    renderItem={(item) => <List.Item>{item}</List.Item>}
                                />
                            </TabPane>
                            <TabPane tab='Dlaczego warto' key='3'>
                                {product.whyUse}
                            </TabPane>
                            <TabPane tab='Zalecane stosowanie' key='4'>
                                {product.advisedUsage.map((item) => {
                                    return (
                                        <div style={{ marginBottom: '8px' }}>
                                            <Typography.Title level={4}>{item.title}</Typography.Title>
                                            <Typography.Paragraph>{item.text}</Typography.Paragraph>
                                        </div>
                                    );
                                })}
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col
                        xs={{ span: 22, offset: 1 }}
                        sm={{ span: 8, offset: 0 }}
                        md={{ span: 10, offset: 0 }}
                        lg={{ span: 12, offset: 0 }}
                    >
                        <Typography.Title level={2}>{product.name}</Typography.Title>
                        <Typography.Paragraph type='secondary'>
                            Odżywka białkowa nr 1 w Wielkiej Brytanii – teraz w Twojej codziennej diecie
                        </Typography.Paragraph>

                        <Rate disabled defaultValue={product.rating} />

                        <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish}>
                            <Form.Item
                                label='Smak'
                                name='flavour'
                                rules={[{ required: true, message: 'Proszę wybrać smak' }]}
                            >
                                <Select placeholder='Smak' defaultActiveFirstOption style={{ width: '160px' }}>
                                    {product.flavor.map((flav) => (
                                        <Select.Option key={flav} value={flav}>
                                            {flav}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item label='Ilość' name='quantity'>
                                <InputNumber min={1} max={10} />
                            </Form.Item>

                            <Form.Item>
                                <Button type='primary' htmlType='submit'>
                                    Dodaj do kosztyka
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

                <Divider />

                <Row>
                    <Col>
                        <Typography.Title level={2}>Recenzje od klientów</Typography.Title>
                        <Rate disabled defaultValue={product.rating} />
                        <Typography.Text type='secondary'>128 recenzji</Typography.Text>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{ span: 22, offset: 1 }} md={{ span: 12, offset: 0 }}>
                        <List
                            itemLayout='horizontal'
                            dataSource={product.comments}
                            renderItem={(prod) => (
                                <>
                                    <Comment author={prod.userName} content={prod.text} />
                                    <Rate disabled defaultValue={prod.givenRate} style={{ fontSize: '16px' }} />
                                    <Divider style={{ margin: '12px 0 8px' }} />
                                </>
                            )}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProductPage;
