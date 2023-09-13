import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelectot } from '../hooks/useTypedSelector';

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelectot((state) => state.auth);
  return isAuth ? (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Button ghost onClick={() => console.log('logout')}>
        Logout
      </Button>
    </Layout.Header>
  ) : (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <div style={{ color: 'white' }}>Mezin24</div>
      <Button
        ghost
        onClick={() => navigate(RouteNames.EVENTS, { replace: true })}
      >
        Login
      </Button>
    </Layout.Header>
  );
};
