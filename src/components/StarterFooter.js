import React from 'react';
import { Row, Col, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons'

const StarterFooter = () => {


    return (

        <Row justify="center" className="phl-starter-footer">
            <Col >
                <Button color="#FFF" shape="circle-outline" icon={<DownOutlined color="#000" />}></Button>
            </Col>
        </Row>
    )
}

export default StarterFooter;