import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames, privateRoutes, publicRoutes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const AppRoutes = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
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
