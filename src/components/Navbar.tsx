import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router';

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return isAuth ? (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <div style={{ color: 'white' }}>{user.username}</div>
      <Button ghost onClick={logout}>
        Logout
      </Button>
    </Layout.Header>
  ) : (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Button
        ghost
        onClick={() => navigate(RouteNames.EVENTS, { replace: true })}
      >
        Login
      </Button>
    </Layout.Header>
  );
};
