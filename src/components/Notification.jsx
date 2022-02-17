import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../data/dummy';

const Notification = ({ setNotification }) => {
  return (
    <div className='nav-item absolute top-16 md:right-48 right-10 bg-white p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg'>Notifications</p>
          <button className='text-white text-xs rounded p-1 px-2 bg-orange'>
            5 New
          </button>
        </div>

        <div>
          <button
            className='text-2xl text-gray-500 rounded-md'
            onClick={() => setNotification(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
      <div className='mt-5 '>
        {chatData?.map((item) => (
          <div className='flex items-center leading-8 gap-5 border-b-1 border-color p-3'>
            <img
              className='rounded-full h-10 w-10'
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className='font-semibold'>{item.message}</p>
              <p className='text-gray-500 text-sm'>{item.desc}</p>
            </div>
          </div>
        ))}

        <div>
          <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4 w-full'>
            See all notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
