import React from 'react';
import { Row, Col } from 'antd';

const Section = (props) => {


    return (

        <Row style={{ minHeight: "100vh" }} id={props.id}>
            <Col span={24} style={props.style}>
                {props.children}
            </Col>
        </Row>
    )
}

export default Section;