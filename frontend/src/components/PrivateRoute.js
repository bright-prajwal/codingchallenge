import { Navigate } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';

export default function PrivateRoute({ children, role }) {
  const token = localStorage.getItem('token');
  const currentRole = localStorage.getItem('role');

  if (!token) return <Navigate to="/login" />;
  if (role && currentRole !== role) return <Navigate to="/" />;

  return children;
}

