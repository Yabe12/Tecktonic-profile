// Layout.js
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from './../utils/UserContext';
import Header from './Header';

function Layout() {
  const { isAdmin } = useContext(UserContext);

  return (
    <div>
      <Header isAdmin={isAdmin} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
