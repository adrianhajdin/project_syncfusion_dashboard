import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../data/dummy';

const Chat = ({ setChat }) => {
  return (
    <div className='nav-item absolute top-16 md:right-60 right-10 bg-white p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg'>Messages</p>
          <button className='text-white text-xs rounded p-1 px-2 bg-orange'>
            5 New
          </button>
        </div>

        <div>
          <button
            className='text-2xl text-gray-500 rounded-md'
            onClick={() => setChat(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
      <div className='mt-5 '>
        {chatData?.map((chat) => (
          <div className='flex items-center gap-5 border-b-1 border-color p-3 leading-10'>
            <img
              className='rounded-full h-10 w-10'
              src={chat.image}
              alt={chat.message}
            />
            <div>
              <p className='font-semibold '>{chat.message}</p>
              <p className='text-gray-500 text-sm'>{chat.desc}</p>
              <p className='text-gray-500 text-xs'>{chat.time}</p>
            </div>
          </div>
        ))}

        <div>
          <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4 w-full'>
            See all messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
