import { Card, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AuthActionCreator } from '../store/reducer/auth/action-creators';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const submitHandler = () => {
    console.log('submit');
    dispatch(AuthActionCreator.login('', ''));
  };

  return (
    <div
      className='h100'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card>
        <Form onFinish={submitHandler}>
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
