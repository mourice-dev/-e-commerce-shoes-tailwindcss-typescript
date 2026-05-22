/** @format */

import { useState } from "react";
import cart from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";
import sneakerslogo from "../assets/images/logo.svg";
import view1 from "../assets/images/image-product-1-thumbnail.jpg";
import deleting from "../assets/images/icon-delete.svg";

function Header() {
  const [isClose, setIsClose] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function checkIsClose() {
    setIsClose((prev) => !prev);
    

  }

  return (
    <div className='relative'>
      <div
        className={`fixed left-0 top-0 h-screen z-50 w-60 md:hidden bg-white pl-8 p-5 ${isClose ? "block" : "hidden"}`}
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
      <div
        className={`fixed inset-0 bg-black/75 z-40 md:hidden ${isClose ? "block" : "hidden"}`}></div>

      <div className='flex justify-between md:justify-around border-b-1 py-2 border-gray-200'>
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
            <button onClick={() => setIsCartOpen((prev) => !prev)}>
              <img
                src={cart}
                alt='cart-icon'
                className='h-4 mr-8 cursor-pointer hover:brightness-0'
              />

              <p className='absolute bg-Orange rounded-xl cursor-pointer px-2 text-xs text-white left-2 bottom-3'>
                4
              </p>
            </button>
            <div
              className={`fixed md:absolute z-30  md:block left-5 md:-left-30 md:top-10  top-20  rounded-xl md:top-10 bg-white   shadow-2xl ${isCartOpen ? "md:block block" : "md:hidden hidden"}`}>
              <div className='flex justify-start items-center text-center py-4 border-b-1 border-gray-200'>
                <p className='font-bold ml-3 text-sm '>Cart</p>
              </div>
              <div className='flex justify-center items-center bg-white min-h-80 md:min-h-40 w-90 md:w-80 rounded-b-2xl text-center'>
                {/* <p className=' items-center font-bold text-gray-500 text-xs'>
                  Your cart is empty.
                </p> */}
                <div className=' flex-col'>
                  <div className='flex-col  md:mt-6 '>
                   

                    <div className='flex gap-2 justify-between mt-3 items-center text-center'>
                      <img src={view1} alt='' className='h-10 rounded-sm' />
                      <p className='text-xs font-semibold text-gray-700'>
                        Fall Limited Edition Sneakers
                        <p className='block'>
                          $125.00 x 3 <b className='text-black'>$375.00</b>
                        </p>
                      </p>
                      <img
                        src={deleting}
                        alt=''
                        className='h-4 cursor-pointer'
                      />
                    </div>

                    <button className='bg-Orange px-22 py-2 font-semibold rounded-md mt-5 cursor-pointer hover:opacity-80 transition duration-300'>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button>
            <div className='rounded-full border-2 border-white border-2 hover:border-Orange'>
              <img src={profile} alt='' className='w-10 cursor-pointer' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
