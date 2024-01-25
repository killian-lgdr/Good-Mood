import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || !user.id || !user.name) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
