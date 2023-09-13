import { EventPage } from '../pages/EventPage';
import { LoginPage } from '../pages/LoginPage';

export enum RouteNames {
  LOGIN = '/',
  EVENTS = '/events',
}

interface IRoute {
  path: RouteNames;
  component: JSX.Element;
  exact?: boolean;
}

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.EVENTS,
    component: <EventPage />,
    exact: true,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    component: <LoginPage />,
    exact: true,
  },
];
