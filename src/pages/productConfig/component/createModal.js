import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;

const CreateModal = ({ visible, submitMap, onCancel }) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
  };
  const cancel = () => {
    form.resetFields();
    form.setFieldsValue({});
    onCancel();
  };
  const dateFormat = 'YYYY/MM/DD';
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        submitMap(values);
      })
      .catch((info) => {
        console.log('校验失败:', info);
      });
  };
  let btnArr = [
    <Button onClick={cancel}>取消</Button>,
    <Button key="submit" type="primary" onClick={handleSubmit}>
      确认
    </Button>,
  ];
  return (
    <Modal
      visible={visible}
      title="新建服务"
      onCancel={cancel}
      destroyOnClose={true}
      footer={btnArr}
    >
      <Form form={form} {...layout} name="createLessee" initialValues={{ gender: 0 }}>
        <Form.Item
          label="服务名称"
          name="serviceName"
          rules={[
            {
              required: true,
              message: '请输入服务名称',
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="请输入服务名称" />
        </Form.Item>
        <Form.Item
          label="业务名称"
          name="descibe"
          rules={[
            {
              required: true,
              message: '请输入业务名称',
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="请输入业务名称" />
        </Form.Item>
        <Form.Item
          label="服务描述"
          name="description"
          rules={[
            {
              required: true,
              message: '请输入服务描述',
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="请输入服务描述" />
        </Form.Item>
        <Form.Item
          label="服务状态"
          rules={[
            {
              required: true,
              message: '请选择服务状态',
            },
          ]}
          name="serviceStatus"
          hasFeedback
        >
          <Select placeholder="请选择服务状态" allowClear>
            <Option value="0">已上线</Option>
            <Option value="1">未上线</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="服务配置"
          rules={[
            {
              required: true,
              message: '请选择服务配置',
            },
          ]}
          name="baseEquip"
          hasFeedback
        >
          <Select mode="multiple" placeholder="请选择服务配置" allowClear>
            <Option value="基础配置">基础配置</Option>
            <Option value="设备用房">设备用房</Option>
          </Select>
        </Form.Item>
      
      </Form>
    </Modal>
  );
};

export default CreateModal;
