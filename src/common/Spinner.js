import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = ({ spinning = true, children }) => {
  return (
    <Spin
      spinning={spinning}
      indicator={<LoadingOutlined />}
      size="large"
      style={{ margin: "100px 0" }}
    >
      {children}
    </Spin>
  );
};

export default Spinner;
