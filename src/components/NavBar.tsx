import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {}, [setIsSticky]);

  return (
    <div
      className={`bg-white ${
        isSticky ? 'text-black fixed top-0 left-0 right-0' : ''
      } ${isSticky ? 'bg-white' : ''} ${!isSticky ? '' : 'hidden'}`}
    >
      <div className="container mx-auto flex items-center justify-end p-4 space-x-4 lg:text-xl max-lg:text-lg max-sm:text-sm">
        <div className="flex space-x-4">
          <NavLink to="/" label="Home" currentPath={location.pathname} />
          <NavLink
            to="/aboutus"
            label="About"
            currentPath={location.pathname}
          />
          <NavLink
            to="/activities"
            label="Activities"
            currentPath={location.pathname}
          />
        </div>
        <Link
          to="/register"
          className="text-white font-bold rounded bg-blue-500 p-2 px-4"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

const NavLink = ({ to, label, currentPath }: any) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`${
        isActive ? 'text-blue-500' : 'text-black'
      } hover:text-blue-500 p-1`}
    >
      {label}
    </Link>
  );
};

export default NavBar;
