import { Button, Card, Form, Input } from 'antd';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const submitHandler = () => {
    login(username, password);
  };

  return (
    <Card>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form onFinish={submitHandler}>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button type='primary' htmlType='submit' loading={isLoading}>
            Submit
          </Button>
        </div>
      </Form>
    </Card>
  );
};
