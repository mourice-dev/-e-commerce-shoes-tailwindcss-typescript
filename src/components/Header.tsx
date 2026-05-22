/** @format */

import { useState } from "react";
import cart from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg"; 
import sneakerslogo from "../assets/images/logo.svg";


function Header() {
  const [isClose, setIsClose] = useState(false);

  function checkIsClose() {
    setIsClose((prev) => !prev);
  }

  return (
    <div className='relative'>
      <div
        className={`absolute h-screen w-60 md:hidden bg-white pl-8 p-5 ${isClose ? "block" : "hidden"}`}
        id='close'>
        <nav className=''>
          <img
            src={close}
            alt=''
            className='cursor-pointer h-4 hover:brightness-0'
            onClick={() => checkIsClose()}
          />

          <ul className='items-center gap-8 no-underline list-none font-bold text-gray-700   text-xs mt-8'>
            <li className='hover:text-gray-900 mt-4'>
              <a href='#'>Collections</a>
            </li>
            <li className='hover:text-gray-900 mt-4'>
              <a href='#'>Men</a>
            </li>
            <li className='hover:text-gray-900 mt-4'>
              <a href='#'>Women</a>
            </li>
            <li className='hover:text-gray-900 mt-4'>
              <a href='#'>About</a>
            </li>
            <li className='hover:text-gray-900 mt-4'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='flex justify-between md:justify-around border-b-1  border-gray-200'>
        <nav className='flex items-center gap-18 p-3 md:p-6 font-kumbh'>
          <div className='flex justify-start items-center'>
            <img
              src={menu}
              alt=''
              className={`cursor-pointer mr-3 ${isClose ? "hidden" : "block"} md:hidden hover:brightness-0`}
              id='bagde'
              onClick={() => checkIsClose()}
            />
            <a
              href='#'
              className='font-[700] text-3xl text-gray-800 hover:text-gray-900'>
              <img src={sneakerslogo} alt='' />
            </a>
          </div>
          <ul className='items-center gap-8 no-underline text-xs font-semibold list-none hidden md:flex text-gray-500'>
            <li className='hover:text-gray-700'>
              <a href='#' className='border-b-0 py-8 border-b-white'>
                Collections
              </a>
            </li>
            <li className='hover:text-gray-700'>
              <a href='#' className='border-b-0 py-8 border-b-white'>
                Men
              </a>
            </li>
            <li className='hover:text-gray-700  '>
              <a href='#' className='border-b-4 py-8 border-b-Orange'>
                Women
              </a>
            </li>
            <li className='hover:text-gray-700'>
              <a href='#' className='border-b-0 py-8 border-b-white'>
                About
              </a>
            </li>
            <li className='hover:text-gray-700'>
              <a href='#' className='border-b-0 py-8 border-b-white'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center'>
          <div className='relative'>
            <img
              src={cart}
              alt='cart-icon'
              className='h-4 mr-8 cursor-pointer hover:brightness-0'
            />
            <p className='absolute bg-Orange rounded-xl px-2 text-xs text-white left-2 bottom-3'>
              3
            </p>
          </div>

          <div className='rounded-full border-2 border-white hover:border-2 hover:border-Orange'>
            <img src={profile} alt='' className='w-10 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
