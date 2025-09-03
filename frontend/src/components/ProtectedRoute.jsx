import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, loading } = useUser();

  // Wait for context to finish loading before making decisions
  if (loading) return null; // or a loading spinner if you prefer

  // Redirect if not logged in
  if (!user) return <Navigate to="/login" />;

  // Redirect if role is not allowed
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  // Access granted
  return children;
};

export default ProtectedRoute;