import React, { Component } from "react";
import { Button, Col, Form, Input, Row, Layout } from "antd";
import style from "../style/style.module.css";
import { connect } from "react-redux";
import { signInAction } from "../../store/actions/authActions";

const { Content, Header } = Layout;

class SignIn extends Component {
    render() {

        const onLogin = (value) => {
            this.props.signIn(value);
        }
        return (
            <div>
                <Header style={{ background: "lightgreen", padding: "0 15px" }}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <h3 onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}><b>SIMARA TRADERS</b></h3>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>

                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: "40px 40px 20px 40px",
                        minHeight: 400,
                        color: "#fff",
                    }}
                >
                    <Row>
                        <Col xs={0} sm={0} md={4} lg={4} xl={6} xxl={8}></Col>
                        <Col xs={24} sm={24} md={16} lg={16} xl={12} xxl={8}>
                            <Form layout="vertical" onFinish={onLogin}>
                                <Row gutter={30}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                        <Form.Item
                                            hasFeedback
                                            label="Email"
                                            name="email"
                                            rules={[
                                                { required: true, message: "This field is required with valid email!!!", type: "email" },
                                            ]}
                                        >
                                            <Input placeholder="Enter email" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                        <Form.Item
                                            hasFeedback
                                            label="Password"
                                            name="password"
                                            rules={[
                                                { required: true, message: "This field is required!!!" }
                                            ]}
                                        >
                                            <Input.Password placeholder="Enter password" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>
                                    <Button
                                        htmlType="submit"
                                        type="primary"
                                        style={{
                                            width: 80,
                                            marginTop: 15,
                                            fontWeight: "bold"
                                        }}
                                        size="middle"
                                    >
                                        Login
                            </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col xs={0} sm={0} md={4} lg={4} xl={6} xxl={8}></Col>

                    </Row>

                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: creds => dispatch(signInAction(creds))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);