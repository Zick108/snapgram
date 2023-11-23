import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Outlet />
    </div>
  );
};

export default RootLayout;
