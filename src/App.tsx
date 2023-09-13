import { Layout } from 'antd';
import { AppRoutes } from './components/AppRoutes';
import './index.css';
import { Navbar } from './components/Navbar';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import { User } from './model/user';

const App = () => {
  const { setAuth, setUser } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
      setUser({ username: localStorage.getItem('username') } as User);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRoutes />
      </Layout.Content>
    </Layout>
  );
};
export default App;
