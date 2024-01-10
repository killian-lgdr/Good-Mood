import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { useKeycloak } from 'keycloak-react-web'; // Importation du hook pour utiliser Keycloak

import DashboardLayout from 'src/layouts/dashboard';

// Importation des pages
export const IndexPage = lazy(() => import('src/pages/app'));
export const QuizzPage = lazy(() => import('src/pages/quizz'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function Router() {
  const { initialized, keycloak } = useKeycloak(); // Récupération des données de Keycloak

  if (!initialized) {
    return <div>Loading...</div>; // Attendre l'initialisation de Keycloak
  }

  return useRoutes([
    {
      element: (
        // Utilisation du composant DashboardLayout pour le layout
        <>
          {keycloak.authenticated ? <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout> : <>

          </>
          }
        </>
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
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
