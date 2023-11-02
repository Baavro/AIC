import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`bg-[#EBE9E6] text-black fixed top-0 left-0 right-0 z-50 ${
        isHidden ? 'transform -translate-y-16' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-end p-4 space-x-4 lg:text-xl max-lg:text-lg max-sm:text-sm">
        <div className="flex space-x-4">
          <NavLink to="/" label="Home" />
          <NavLink to="/aboutus" label="About" />
          <NavLink to="/activities" label="Activities" />
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

const NavLink = ({ to, label }: any) => {
  return (
    <Link to={to} className="text-black hover:text-blue-500 p-1">
      {label}
    </Link>
  );
};

export default NavBar;
