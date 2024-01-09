/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import keycloak from './Keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{ onLoad: 'login-required'}}
      >
        <Router />
      </ReactKeycloakProvider>
    </ThemeProvider>
  );
}
