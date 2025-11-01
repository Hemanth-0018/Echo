import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navBar'; // Assumes navBar.js has a default export
import FooterSection from './footerSection'; // Assumes footerSection.js has a default export

const Layout = () => {
  return (
    <>
      {/* This navbar will now appear on every page */}
      <NavBar />
      
      {/* Your page components will be rendered here */}
      <main>
        <Outlet />
      </main>
      
      {/* This footer will also appear on every page */}
      <FooterSection />
    </>
  );
};

export default Layout;