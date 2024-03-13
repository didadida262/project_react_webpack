import { useNavigate } from 'react-router-dom'
import './index.scss'
import { Card, Button, Checkbox, Form, Input, type FormProps, message  } from 'antd';
import { fetchToken } from '../../store/mouduls/user';
import { useDispatch } from 'react-redux';
import React from 'react';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log('Success:', values);
    await dispatch(fetchToken(values) as any)
    message.success('登陆成功')
    navigate('/')
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div className='login flex-cc'>
          <Card title="Login" bordered={true} style={{ width: 500 }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
    )
}

export default LoginComponent
