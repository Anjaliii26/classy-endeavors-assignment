import React from 'react';
import TopBar from './TopBar';
import NavigationBar from './NavigationBar';

const Header = () => {
  return (
    <header>
      <TopBar />
      <NavigationBar />
    </header>
  );
};

export default Header;