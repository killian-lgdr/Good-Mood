/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import keycloak from './Keycloak';
import { KeycloakProvider } from 'keycloak-react-web';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <KeycloakProvider
        client={keycloak}
        initOptions={{ onLoad: 'login-required'}}
      >
        <Router />
      </KeycloakProvider>
    </ThemeProvider>
  );
}
