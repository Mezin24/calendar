import { Layout } from 'antd';
import { AppRoutes } from './components/AppRoutes';
import './index.css';
import { Navbar } from './components/Navbar';

const App = () => {
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
