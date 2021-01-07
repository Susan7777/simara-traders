import { Button, Col, Form, Input, Row, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Spinner from "../../common/Spinner";
import { updateClientAction } from "../../store/actions/clientActions";

const { Content, Header } = Layout;

const ClientDetail = (props) => {

    const [buttonClick, setButtonClick] = useState(false);

    const [myForm] = Form.useForm();
    const { clients } = props;

    const showClick = () => {
        window.location.href = "/dashboard";
    }

    useEffect(() => {
        if (clients) {
            myForm.setFieldsValue({
                name: clients.name,
                shop: clients.shop,
                address: clients.address,
                contact: clients.contact,
                mail: clients.mail
            })
        }
    })

    const updateClientDetail = (value) => {
        setButtonClick(true)
        props.updateClient(value);
    }

    return (
        <Spinner spinning={buttonClick || props.loading.clients}>
            <Header style={{ background: "lightgreen", padding: "0 40px" }}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <h2 onClick={() => window.location.href = "/dashboard"} style={{ cursor: "pointer" }}><b>SIMARA TRADERS</b></h2>
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
                <Form layout="vertical" form={myForm} onFinish={updateClientDetail}>
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
                            Update
                            </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Spinner>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const clients = state.firestore.data.clients;
    const client = clients ? clients[id] : null
    return {
        clients: client,
        loading: state.firestore.status.requesting
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        updateClient: client => dispatch(updateClientAction(id, client))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{
    collection: "clients"
}]))(ClientDetail);