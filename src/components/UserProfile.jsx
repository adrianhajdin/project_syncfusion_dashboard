import React from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { BsShield, BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

const UserProfile = ({ setUserProfile }) => {
  return (
    <div className='nav-item absolute top-16 right-10 bg-white p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg'>User Profile</p>

        <div>
          <button
            className='text-2xl text-gray-500 rounded-md'
            onClick={() => setUserProfile(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
      <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
        <img
          className='rounded-full h-26 w-26'
          src='data:image/jpeg;base64,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'
          alt=''
        />
        <div>
          <p className='font-semibold text-xl'>Julia Roberts</p>
          <p className='text-gray-500 text-sm'>Administrator</p>
          <p className='text-gray-500 text-sm font-semibold'>info@shop.com</p>
        </div>
      </div>
      <div>
        <div className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer'>
          <button className=' text-light-blue bg-icon-light-blue text-xl rounded-lg p-3 hover:bg-light-gray'>
            <BsCurrencyDollar />
          </button>

          <div>
            <p className='font-semibold '>My Profile</p>
            <p className='text-gray-500 text-sm'>Account Settings</p>
          </div>
        </div>
        <div className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer'>
          <button className=' text-icon-light-green bg-icon-light-green text-xl rounded-lg p-3 hover:bg-light-gray'>
            <BsShield />
          </button>
          <div>
            <p className='font-semibold '>My Inbox</p>
            <p className='text-gray-500 text-sm'>Messages & Emails</p>
          </div>
        </div>
        <div className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer'>
          <button className=' text-icon-light-red bg-icon-light-orange text-xl rounded-lg p-3 hover:bg-light-gray'>
            <FiCreditCard />
          </button>
          <div>
            <p className='font-semibold '>My Tasks</p>
            <p className='text-gray-500 text-sm'>To-do and Daily Tasks</p>
          </div>
        </div>
      </div>
      <div>
        <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4 w-full'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
