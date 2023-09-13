import { LoginForm } from '../components/LoginForm';

export const LoginPage = () => {
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
      <LoginForm />
    </div>
  );
};
