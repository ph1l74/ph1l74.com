import React from 'react';
import { Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

    const links = useSelector(state => state.navbarLinks);

    return (

        <Row className="phl-starter-navbar">
            <Col span={6}></Col>
            <Col span={12}>
                <Row justify="space-between">
                    {links.map((link, i) => (
                        <Col>
                            {
                                link.url[0] === "#" ?
                                    <AnchorLink href={link.url}>
                                        <Button className="phl-navbar-links" type="link" size="large">
                                            {link.icon ? <i className={link.icon} style={{ marginRight: "6px", textTransform: "uppercase" }}></i> : null}{link.text}
                                        </Button>
                                    </AnchorLink>
                                    :
                                    <Button className="phl-navbar-links" type="link" size="large" href={link.url} target={link.targetBlank ? '_blank' : ''}>
                                        {link.icon ? <i className={link.icon} style={{ marginRight: "6px" }}></i> : null}{link.text}
                                    </Button>
                            }
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col span={6}></Col>
        </Row>
    )
}

export default Navbar;