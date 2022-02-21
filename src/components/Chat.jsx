import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';
import { chatData } from '../data/dummy';

const Chat = ({ setChat, chat, currentColor }) => {
  return (
    <div className='nav-item origin-top-right active:scale-100 transition-transform duration-3000 ease-in-out absolute top-16 md:right-52 right-10 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>Messages</p>
          <button className='text-white  text-xs rounded p-1 px-2 bg-orange'>
            5 New
          </button>
        </div>

        <Button
          state={chat}
          setState={setChat}
          icon={<MdOutlineCancel />}
          color={'rgb(153, 171, 180)'}
          bgHoverColor={'light-gray'}
          size={'2xl'}
          borderRadius={'full'}
        />
      </div>
      <div className='mt-5 '>
        {chatData?.map((chat) => (
          <div className='flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer'>
            <img
              className='rounded-full h-10 w-10'
              src={chat.image}
              alt={chat.message}
            />
            <div>
              <p className='font-semibold dark:text-gray-200 '>
                {chat.message}
              </p>
              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                {chat.desc}
              </p>
              <p className='text-gray-500 dark:text-gray-400 text-xs'>
                {chat.time}
              </p>
            </div>
          </div>
        ))}

        <div>
          <Button
            state={chat}
            setState={setChat}
            color={'white'}
            bgColor={currentColor}
            text={'See all messages'}
            borderRadius={'md'}
            width={'full'}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
