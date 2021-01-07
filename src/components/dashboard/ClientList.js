import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Table, Tooltip, Form } from 'antd';
import { useState } from "react";
import { connect } from "react-redux";
import { removeClientAction } from "../../store/actions/clientActions";


const ClientList = ({ client, removeClient }) => {
    const [viewDelete, setViewDelete] = useState(false);
    const [deleteId, setDeleteId] = useState();

    const removeClientModal = (id) => {
        setViewDelete(true);
        setDeleteId(id);
    }

    const editClient = (id) => {
        window.location.href = "/client/" + id;
    }

    const handleDeleteCancel = () => {
        setViewDelete(false);
    }

    const deleteClient = () => {
        removeClient(deleteId);
        setViewDelete(false);
    }

    const columns = [
        {
            title: (
                <>
                    <b>Name</b>
                </>
            ),
            dataIndex: "name",
            key: "name",
        },
        {
            title: (
                <>
                    <b>Shop</b>
                </>
            ),
            dataIndex: "shop",
            key: "shop",
        },
        {
            title: (
                <>
                    <b>Address</b>
                </>
            ),
            dataIndex: "address",
            key: "address",
        },
        {
            title: (
                <>
                    <b>Contact</b>
                </>
            ),
            dataIndex: "contact",
            key: "contact",
        },
        {
            title: (
                <>
                    <b>Mail</b>
                </>
            ),
            dataIndex: "mail",
            key: "mail",
        },
        {
            title: (
                <>
                    <b>Action</b>
                </>
            ),
            dataIndex: "id",
            width: 120,
            key: "id",
            render: (record) => {
                return (
                    <div>
                        <Tooltip title="Delete">
                            <DeleteOutlined
                                style={{ fontSize: 20 }}
                                onClick={() => removeClientModal(record)}
                            />
                        </Tooltip>
                        <Tooltip title="Edit">
                            <EditOutlined
                                style={{ fontSize: 20, marginLeft: 20 }}
                                onClick={() => editClient(record)}
                            />
                        </Tooltip>
                        <Modal
                            title="Client Delete"
                            visible={viewDelete}
                            onCancel={handleDeleteCancel}
                            okText="Yes"
                            cancelText="No"
                            onOk={() => {
                                deleteClient();
                            }}
                        >
                            <Form>
                                <div style={{ textAlign: "center" }}>
                                    <h1>Are you sure to delete this client?</h1>
                                </div>
                            </Form>
                        </Modal>
                    </div>
                );
            },
        },
    ];

    return (

        <Table
            columns={columns}
            dataSource={client}
            style={{ overflow: "auto" }}
        />

    )
};

const mapDispatchToProps = dispatch => {
    return {
        removeClient: id => dispatch(removeClientAction(id))
    };
};

export default connect(null, mapDispatchToProps)(ClientList);