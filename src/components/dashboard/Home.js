import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Button, Col, Row, Layout } from 'antd';

const { Content, Header } = Layout;


class Home extends Component {
    render() {
        const loginButton = () => {
            window.location.href = "/signin";
        }

        return (
            <div>
                <Header style={{ background: "lightgreen", padding: "0 40px" }}>
                    <Row>
                        <Col xs={18} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <h2 onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}><b>SIMARA TRADERS</b></h2>
                        </Col>
                        <Col xs={6} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div style={{ float: "right" }}>
                                <Button type="primary" size="small" style={{ marginLeft: 15 }} onClick={loginButton}>Login</Button>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content style={{
                    margin: "40px 40px 20px 40px",
                    minHeight: 400,
                    color: "#fff",
                }}>
                    <div style={{ textAlign: "center", marginTop: 120 }}>
                        <h1><b>WELCOME TO SIMARA TRADERS</b></h1>
                        <h3>Please login to navigate in dashboard!!</h3>
                    </div>
                </Content>
            </div>
        )
    }
}

export default Home;