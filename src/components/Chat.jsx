import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button';
import { chatData } from '../data/dummy';

const Chat = ({ setChat, chat, currentColor }) => (
  <div className="bg-transparent w-full h-screen fixed top-0 right-0 nav-item">
    <div className="absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange">
            5 New
          </button>
        </div>

        <Button
          state={chat}
          setState={setChat}
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {chatData?.map((item) => (
          <div className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <Button
            state={chat}
            setState={setChat}
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  </div>

);

export default Chat;
