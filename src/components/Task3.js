import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const MainPage2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate('Home')}> Home page</button>
          </li>
          <li>
            <button onClick={() => navigate('About')}> About page </button>
          </li>
          <li>
            <button onClick={() => navigate('Products')}> Products page </button>
          </li>
          <li>
            <button onClick={() => navigate('Contacts')}> Contacts page </button>
          </li>
          <li>
            <button onClick={() => navigate('Info')}> Info page </button>
          </li>
        </ul>
      </nav>

      <hr />
      
      <Outlet />
    </>
  )
};