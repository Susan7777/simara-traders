import { Button, Col, Form, Input, Row, Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner";
import { addClientAction } from "../../store/actions/clientActions";

const { Content, Header } = Layout;

class AddClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClick: false
        }
    }

    render() {

        const showClick = () => {
            window.location.href = "/dashboard";
        }

        const saveClient = (value) => {
            this.setState({
                buttonClick: true
            })
            this.props.addClient(value);
            // window.location.href = "/";
        }

        return (
            <Spinner spinning={this.state.buttonClick}>
                {this.props.auth.uid !== undefined ? (<div>
                    <Header style={{ background: "lightgreen", padding: "0 40px" }}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <h3 onClick={() => window.location.href = "/dashboard"} style={{ cursor: "pointer" }}><b>SIMARA TRADERS</b></h3>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                <div style={{ float: "right" }}>
                                    <a style={{ color: "black", cursor: "pointer", fontWeight: "bold" }} onClick={showClick}>Client List</a>
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <Content
                        className="site-layout"
                        style={{
                            margin: "40px 40px 20px 40px",
                            minHeight: 400,
                            color: "#fff",
                        }}
                    >
                        <Form layout="vertical" onFinish={saveClient}>
                            <Row gutter={30}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Form.Item
                                        hasFeedback
                                        label="Client Name"
                                        name="name"
                                    >
                                        <Input placeholder="Enter client name" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Form.Item
                                        hasFeedback
                                        label="Shop Name"
                                        name="shop"
                                    >
                                        <Input placeholder="Enter shop name" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Form.Item
                                        hasFeedback
                                        label="Shop Address"
                                        name="address"
                                    >
                                        <Input placeholder="Enter client address" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Form.Item
                                        hasFeedback
                                        label="Client Contact Number"
                                        name="contact"
                                    >
                                        <Input placeholder="Enter client contact number" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Form.Item
                                        hasFeedback
                                        label="Client Gmail Id"
                                        name="mail"
                                    >
                                        <Input placeholder="Enter client gmail id" />
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
                                    Save
                            </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </div>) : <div style={{ marginTop: 100, textAlign: "center" }}>
                        <h1>Please login first!!!</h1>
                    </div>}

            </Spinner>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addClient: client => dispatch(addClientAction(client))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddClient);