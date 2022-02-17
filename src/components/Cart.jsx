import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { cartData } from '../data/dummy';

const Cart = ({ setCart }) => {
  return (
    <div className='nav-item absolute top-16 right-10 md:right-60 bg-white p-8 rounded-lg w-400'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg'>Shopping Cart</p>

        <div>
          <button
            className='text-2xl text-gray-500 rounded-md'
            onClick={() => setCart(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
      {cartData?.map((item) => (
        <div>
          <div>
            <div className='flex items-center leading-8 gap-5 border-b-1 border-color p-4'>
              <img className='rounded-lg h-80 w-24' src={item.image} alt='' />
              <div>
                <p className='font-semibold '>{item.name}</p>
                <p className='text-gray-600 text-sm font-semibold'>
                  {item.category}
                </p>
                <div className='flex gap-4 mt-2 items-center'>
                  <p className='font-semibold text-lg'>{item.price}</p>
                  <div className='flex border-1 border-r-0 border-color rounded'>
                    <p className='p-2 border-r-1 border-color text-red-600 '>
                      -
                    </p>
                    <p className='p-2 border-r-1 border-color text-green-600'>
                      0
                    </p>
                    <p className='p-2 border-r-1 border-color text-green-600'>
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='mt-3 mb-3'>
        <div className='flex justify-between items-center'>
          <p className='text-gray-500'>Sub Total</p>
          <p className='font-semibold'>$890</p>
        </div>
        <div className='flex justify-between items-center mt-3'>
          <p className='text-gray-500'>Total</p>
          <p className='font-semibold'>$890</p>
        </div>
      </div>
      <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4 w-full'>
        Place order
      </button>
    </div>
  );
};

export default Cart;
