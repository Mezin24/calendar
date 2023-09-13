import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames, privateRoutes, publicRoutes } from '../router';

export const AppRoutes = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ component, path, exact }) => (
        <Route key={path} path={path} element={component} index={exact} />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.EVENTS} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ component, path, exact }) => (
        <Route key={path} path={path} element={component} index={exact} />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};
