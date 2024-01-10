import Iconify from 'src/components/iconify/iconify';

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: <Iconify icon="solar:home-2-bold-duotone" width={24} />,
  },
  {
    title: 'quizz',
    path: '/quizz',
    icon: <Iconify icon="solar:checklist-bold-duotone" width={24} />,
  },
  {
    title: 'logout',
    path: 'login',
    icon: <Iconify icon="solar:login-3-bold-duotone" width={24} />,
  },
];

export default navConfig;
