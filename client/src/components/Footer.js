import React from 'react';
import {FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return <footer className='pt-16 bg-primary'>
    <div className='container mx-auto'>
      <div className='text-center'>
        <h2 className='h2 uppercase mb-6 font-semibold '>Subcribe to our newsletter</h2>
        <p className='text-white/70'>Be the first to get the latest news about trends, promotions</p>
      </div>

      <form className='w-full max-w-3xl mx-auto flex flex-col lg:flex-row gap-5 my-14'>
        <input type='text' placeholder='Your email address ' className='input'/>
        <button className='btn btn-accent min-w-[150px] '>Join</button>
      </form>

      {/* link */}
      <div className='text-base flex gap-x-6 capitalize max-w-max mx-auto mb-10'>
        <a href="#" className='hover:text-white transition-all'>
          Returns policy
        </a>

        <a href="#" className='hover:text-white transition-all'>
          Track your order
        </a>

        <a href="#" className='hover:text-white transition-all'>
          Shipping and delivery
        </a>
      </div>

      {/* socials */}
      <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
        <a href="#" className='hover:text-white transition-all'>
          <FaYoutube />
        </a>

        <a href="#" className='hover:text-white transition-all'>
          <FaInstagram/>
        </a>

        <a href="#" className='hover:text-white transition-all'>
          <FaFacebook/>
        </a>
      </div>

    </div>
  </footer>
};

export default Footer;
