import React from 'react';
import { Row, Col } from 'antd';
import { AudioOutlined, CameraOutlined, LaptopOutlined } from '@ant-design/icons';

const StarterContent = () => {


    return (
        <Row className="phl-starter-content" align="middle">
            <Col span={24}>
                <Row className="title">
                    <Col span={3}></Col>
                    <Col>Filat Astakhov</Col>
                    <Col span={3}></Col>
                </Row>
                <Row className="description">
                    <Col span={3}></Col>
                    <Col>
                        <Row span={24}>
                            <Col><LaptopOutlined /> Web-developer</Col>
                        </Row>
                        <Row span={24}>
                            <Col><CameraOutlined /> Photographer</Col>
                        </Row>
                        <Row span={24}>
                            <Col><AudioOutlined /> Musician</Col>
                        </Row>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </Col>
        </Row>
    )
}

export default StarterContent;