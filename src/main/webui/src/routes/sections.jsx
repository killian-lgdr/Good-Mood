import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';
import PrivateRoute from './private-route';

export const IndexPage = lazy(() => import('src/pages/app'));
export const QuizzPage = lazy(() => import('src/pages/quizz'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const QuizzStartPage = lazy(() => import('src/pages/start'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function Router() {
  return useRoutes([
    {
      element: (
        <PrivateRoute>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        {
          element: <IndexPage />,
          index: true,
        },
        {
          path: 'quizz',
          element: <QuizzPage />,
        },
        {
          path: 'start',
          element: <QuizzStartPage />,
        },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
