import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Header } from 'antd/lib/layout/layout';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ClientList from './ClientList';
import Spinner from '../../common/Spinner';
import { Button, Col, Row } from 'antd';
import { signOutAction } from '../../store/actions/authActions';


class Dashboard extends Component {

    render() {

        console.log(this.props.auth.uid);

        const addClick = () => {
            window.location.href = "/add-client";
        }

        const signOutClick = () => {
            this.props.signOut();
        }

        return (
            <Spinner spinning={this.props.loading.clients}>
                {this.props.auth.uid !== undefined ? (
                    <div>
                        <Header style={{ background: "lightgreen", padding: "0 15px" }}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <h2 onClick={() => window.location.href = "/dashboard"} style={{ cursor: "pointer" }}><b>SIMARA TRADERS</b></h2>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <div style={{ float: "right" }}>
                                        <a style={{ color: "black", cursor: "pointer", fontWeight: "bold" }} onClick={addClick}>Add Client</a>
                                        <Button type="primary" danger size="small" style={{ marginLeft: 15 }} onClick={signOutClick}>Logout</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Header>

                        <ClientList client={this.props.clients} />
                    </div>

                ) : <div style={{ marginTop: 100, textAlign: "center" }}>
                        <h1>Please login first!!!</h1>
                    </div>}
            </Spinner>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.firestore.ordered.clients,
        loading: state.firestore.status.requesting,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{
    collection: "clients"
}]))(Dashboard);