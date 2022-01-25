import React from "react";
import jumbotailLogo from "../../assets/logo/jumbotail-logo.png";

const Header: React.FC = () => {
  return (
    <header className='bg-black-100 px-8 py-4 gap-2 flex justify-center md:justify-between'>
      <img src={jumbotailLogo} alt='logo' className='h-11' />
      <div className='hidden md:flex md:gap-8'>
        <button className='text-black-30'>Sign In</button>
        <button className='bg-black-30 text-black-98 px-6 py-3 rounded'>
          Jumbotail for PC
        </button>
      </div>
    </header>
  );
};

export default Header;
