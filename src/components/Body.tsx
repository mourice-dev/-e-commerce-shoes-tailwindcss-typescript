/** @format */
import { useState } from "react";
import shoe from "../assets/images/image-product-1.jpg";
import cart from "../assets/images/icon-cart.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import view1 from "../assets/images/image-product-1-thumbnail.jpg";
import view2 from "../assets/images/image-product-2-thumbnail.jpg";
import view3 from "../assets/images/image-product-3-thumbnail.jpg";
import view4 from "../assets/images/image-product-4-thumbnail.jpg";
import close from "../assets/images/icon-close.svg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";

function Body() {
  const [isClose, setIsClose] = useState(true);

  function checkIsClose() {
    setIsClose((prev) => !prev);
  }
  return (
    <div className={`md:flex justify-center gap-28 items-center md:mt-20 `}>
      <div className='w-100'>
        <div className=' relative z-10 md:rounded-2xl overflow-hidden'>
          <img
            src={shoe}
            alt=''
            className='w-full h-100 object-cover cursor-pointer'
            onClick={() => setIsClose((prev) => false)}
          />
          <div className=' absolute md:hidden top-0 w-full top-1/2  flex justify-between items-center'>
            <button className='p-4 bg-amber-100 rounded-full cursor-pointer'>
              <img src={previous} alt='' className='h-4' />
            </button>
            <button className='p-4 bg-amber-100 rounded-full cursor-pointer'>
              <img src={next} alt='' className='h-4' />
            </button>
          </div>
        </div>

        <div className='mt-4 gap-4 hidden md:flex'>
          <div className='rounded-md overflow-hidden border-2 border-Orange cursor-pointer '>
            <img src={view1} alt='' className=' opacity-50' />
          </div>
          <div className='rounded-md overflow-hidden border-2 border-white cursor-pointer '>
            <img src={view2} alt='' className='hover:opacity-50' />
          </div>
          <div className='rounded-md overflow-hidden border-2 border-white cursor-pointer '>
            <img src={view3} alt='' className='hover:opacity-50' />
          </div>
          <div className='rounded-md overflow-hidden border-2 border-white cursor-pointer '>
            <img src={view4} alt='' className='hover:opacity-50' />
          </div>
        </div>
      </div>
      <div className='m-10 md:m-0 mt-4 md:mt-0'>
        <div className='w-80'>
          <span className='font-bold text-xs text-gray-600 tracking-widest uppercase '>
            sneaker company
          </span>
          <p className='text-3xl font-[700] mt-4'>
            Fall Limited Edition Sneakers
          </p>
          <p className='text-gray-500 text-sm mt-5'>
            Consectetur adipisicing elit. Assumenda quia distinctio fugit, ullam
            porro repellat! Illum culpa vitae nesciunt facere! maxime soluta
            minus cupiditate architecto error?
          </p>
        </div>
        <div className='flex justify-between items-center md:block'>
          <div className='flex  md:justify-start items-center gap-4 mt-4'>
            <p className='font-bold text-2xl '>$125.00 </p>
            <p className='text-sm text-white font-bold bg-gray-950 text-center w-10 rounded-sm '>
              50%
            </p>
          </div>

          <p className='line-through text-gray-500 font-semibold mt-2 '>
            $250.00
          </p>
        </div>
        <div className='md:flex items-center items-center gap-10 mt-7'>
          <div className='flex justify-around items-center md:items-center gap-10'>
            <img src={minus} alt='' className='h-1 cursor-pointer p' />
            <p className='font-bold'>0</p>
            <img src={plus} alt='' className='h-3 cursor-pointer p' />
          </div>
          <div className='flex justify-center w-full mt-4 md:mt-0 items-center cursor-pointer bg-Orange hover:opacity-80 transition duration-300 w-40 h-9 rounded-md gap-2'>
            <img src={cart} alt='' className='h-4 brightness-0' />
            <p className='text-xs font-bold'>Add to cart</p>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/75 md:justify-center hidden md:block ${isClose ? "md:hidden" : "md:flex"}`}>
        <div className='w-110'>
          <div className='flex justify-end'>
            {/* <img
              src={close}
              alt=''
              className='py-9 fill-Orange stroke-Orange cursor-pointer invert sepia saturate-[5000%] hue-rotate-[350deg] brightness-100'
              onClick={() => checkIsClose()}
            /> */}
            <button
              type='button'
              onClick={() => checkIsClose()}
              aria-label='Close'
              className='flex items-center justify-center py-9 text-white hover:opacity-80 transition-opacity cursor-pointer'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='3.5'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18'></line>
                <line x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </button>
          </div>

          <div className='relative'>
            <div className='md:rounded-2xl overflow-hidden'>
              <img src={shoe} alt='' className='w-full h-110 object-cover ' />
            </div>
            {/* <div className=" absolute flex justify-between inset-x-0 top-40 translate-y-1/2 "> */}
            <button className='absolute top-1/2 -translate-y-1/2  -left-6  h-12 w-12 flex justify-center items-center bg-amber-100 rounded-full  cursor-pointer'>
              <img src={previous} alt='' className='h-4' />
            </button>
            <button className='absolute top-1/2 -translate-y-1/2 -right-6  h-12 w-12 flex justify-center items-center bg-amber-100 rounded-full  cursor-pointer'>
              <img src={next} alt='' className='h-4' />
            </button>
            {/* </div> */}
          </div>
          <div className='mt-4 gap-4 hidden md:flex'>
            <div className='rounded-md overflow-hidden border-2 border-Orange cursor-pointer '>
              <img src={view1} alt='' className=' opacity-50' />
            </div>
            <div className='rounded-md overflow-hidden border-2 border-white cursor-pointer '>
              <img src={view2} alt='' className='hover:opacity-50' />
            </div>
            <div className='rounded-md overflow-hidden border-2 border-white cursor-pointer '>
              <img src={view3} alt='' className='hover:opacity-50' />
            </div>
            <div className='rounded-md overflow-hidden border-2 border-white cursor-pointer '>
              <img src={view4} alt='' className='hover:opacity-50' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
