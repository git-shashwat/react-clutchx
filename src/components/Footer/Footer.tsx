import React from "react";
import JumbotailLogo from "../../assets/logo/jumbotail-logo.png";
import IndiaFlag from "../../assets/images/India.png";

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col bg-black-12 px-8 py-4 md:px-40'>
      <div className='flex flex-col items-center flex-wrap justify-around md:flex-row'>
        <img src={JumbotailLogo} alt='logo' className='mb-4 h-11 md:mb-0' />
        <div className='mb-4 flex flex-col md:gap-y-4 md:mb-0'>
          <a className='text-black-100' href='/'>
            Contact
          </a>
          <a className='text-black-100' href='/'>
            FAQ's
          </a>
        </div>
        <div className='mb-4 flex flex-col md:gap-y-4 md:mb-0'>
          <a className='text-black-100' href='/'>
            Tutorials
          </a>
          <a className='text-black-100' href='/'>
            Blog
          </a>
        </div>
        <div className='mb-4 flex flex-col md:gap-y-4 md:mb-0'>
          <a className='text-black-100' href='/'>
            Privacy
          </a>
          <a className='text-black-100' href='/'>
            Banned Items
          </a>
        </div>
        <div className='mb-4 flex flex-col md:gap-y-4 md:mb-0'>
          <a className='text-black-100' href='/'>
            About
          </a>
          <a
            className='text-black-100 flex gap-1 justify-center items-center'
            href='/'
          >
            Jobs
            <div className='flex justify-center items-center rounded-full bg-black-100 text-black-12 w-5 h-5'>
              3
            </div>
          </a>
        </div>
        <div className='flex flex-col md:gap-y-4'>
          <a className='text-black-100' href='/'>
            Facebook
          </a>
          <a className='text-black-100' href='/'>
            Twitter
          </a>
          <a className='text-black-100' href='/'>
            LinkedIn
          </a>
        </div>
      </div>
      <div className='mt-6 w-full border-t border-black-100 border-opacity-20' />
      <div className='flex flex-col md:flex-row justify-between mt-3'>
        <p className='text-black-100'>Jumbotail 2022, All rights reserved.</p>
        <p className='flex justify-center items-center gap-2 text-black-100'>
          Made in{" "}
          <span>
            <img src={IndiaFlag} alt=''></img>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
