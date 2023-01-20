import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const protectedRoute =
  (Comp, route = '/profile') =>
  (props) => {
    const navigate = useNavigate();
    async function checkAuthState() {
      try {
        const data = await Auth.currentAuthenticatedUser();
        console.log('prot auth data=', data);
      } catch (err) {
        // props.history.push(route);
        navigate(route);
      }
    }
    useEffect(() => {
      checkAuthState();
    });
    return <Comp {...props} />;
  };

export default protectedRoute;
