import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import GetStartedButton from './GetStartedButton';
import Socials from './Socials';

const NavigationBar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
      <Logo />

      <div className="md:flex">
        <NavLinks />
      </div>

      <div className="flex items-center space-x-4">
        <Socials />
        <GetStartedButton />
      </div>

      <div className="md:hidden">
      </div>
    </nav>
  );
};

export default NavigationBar;
