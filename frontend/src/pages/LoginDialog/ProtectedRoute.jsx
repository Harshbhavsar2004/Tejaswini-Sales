import { Navigate } from 'react-router-dom';
import { fetchUserDetails } from '@/utils/auth';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      const userDetails = await fetchUserDetails();
      console.log(userDetails);
      
      if (userDetails) {
        setIsAuthenticated(true);
        setIsAdmin(userDetails.role === 'admin');
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkUserRole();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Optionally show a loading state
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect to login if not authenticated
  }

  return isAdmin ? children : <Navigate to="/" />; // Redirect to / if not admin
};

export default ProtectedRoute;
