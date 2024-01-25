import Iconify from 'src/components/iconify/iconify';

const navConfig = [
  {
    title: 'accueil',
    path: '/',
    icon: <Iconify icon="solar:home-2-bold-duotone" width={24} />,
  },
  {
    title: 'questionnaire quotidien',
    path: '/start',
    icon: <Iconify icon="solar:checklist-bold-duotone" width={24} />,
  },
  {
    title: 'questionnaires',
    path: '/create',
    icon: <Iconify icon="solar:document-add-bold-duotone" width={24} />,
  },
  {
    title: 'Déconnexion',
    path: 'login',
    icon: <Iconify icon="solar:login-3-bold-duotone" width={24} />,
  },
];

export default navConfig;
