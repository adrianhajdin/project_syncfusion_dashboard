import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';
import { chatData } from '../data/dummy';

const Notification = ({ setNotification, notification, currentColor }) => {
  return (
    <div className='nav-item absolute top-16 md:right-40 right-20 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>
            Notifications
          </p>
          <button className='text-white text-xs rounded p-1 px-2 bg-orange-theme '>
            5 New
          </button>
        </div>

        <Button
          state={notification}
          setState={setNotification}
          icon={<MdOutlineCancel />}
          color={'rgb(153, 171, 180)'}
          bgHoverColor={'light-gray'}
          size={'2xl'}
          borderRadius={'full'}
        />
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
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 text-sm dark:text-gray-400'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        <div>
          <Button
            state={notification}
            setState={setNotification}
            color={'white'}
            bgColor={currentColor}
            text={'See all notifications'}
            borderRadius={'md'}
            width={'full'}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
