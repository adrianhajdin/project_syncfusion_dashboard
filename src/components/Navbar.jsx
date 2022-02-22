import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown, MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
import Searchbar from './Searchbar';
import Button from './Button';

const Navbar = ({ activeMenu, setActiveMenu, currentColor }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  console.log(currentColor);
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <div className='flex'>
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          style={{ color: currentColor }}
          className='text-xl rounded-full p-3 hover:bg-light-gray sm:hidden'
        >
          {activeMenu ? (
            <TooltipComponent
              content={'Close'}
              position={'BottomCenter'}
              tabIndex={0}
            >
              <MdOutlineCancel className='text-lg' />
            </TooltipComponent>
          ) : (
            <TooltipComponent
              content={'Menu'}
              position={'BottomCenter'}
              tabIndex={0}
            >
              <AiOutlineMenu className='text-lg' />
            </TooltipComponent>
          )}
        </button>
        <TooltipComponent
          content={'Menu'}
          position={'BottomCenter'}
          tabIndex={0}
        >
          <button
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
            className='text-xl rounded-full p-3 hover:bg-light-gray hidden sm:block '
          >
            <AiOutlineMenu />
          </button>
        </TooltipComponent>
        <TooltipComponent
          content={'Search'}
          position={'BottomCenter'}
          tabIndex={0}
        >
          <Button
            state={search}
            setState={setSearch}
            icon={<FiSearch />}
            color={currentColor}
            bgHoverColor={'light-gray'}
            size={'xl'}
            borderRadius={'full'}
          />
        </TooltipComponent>
      </div>

      <div className='flex'>
        <TooltipComponent
          content={'Cart'}
          position={'BottomCenter'}
          tabIndex={0}
        >
          <Button
            state={cart}
            setState={setCart}
            color={currentColor}
            icon={<FiShoppingCart />}
            bgHoverColor={'light-gray'}
            size={'xl'}
            borderRadius={'full'}
          />
        </TooltipComponent>
        <TooltipComponent
          content={'Chat'}
          position={'BottomCenter'}
          tabIndex={0}
        >
          <Button
            state={chat}
            setState={setChat}
            icon={<BsChatLeft />}
            dotColor={'#03C9D7'}
            color={currentColor}
            bgHoverColor={'light-gray'}
            size={'lg'}
            borderRadius={'full'}
          />
        </TooltipComponent>
        <TooltipComponent
          content={'Notification'}
          position={'BottomCenter'}
          tabIndex={0}
        >
          <Button
            state={notification}
            setState={setNotification}
            icon={<RiNotification3Line />}
            dotColor={'rgb(254, 201, 15)'}
            color={currentColor}
            bgHoverColor={'light-gray'}
            size={'xl'}
            borderRadius={'full'}
          />
        </TooltipComponent>
        <TooltipComponent
          content={'Profile'}
          position={'BottomCenter'}
          tabIndex={0}
        >
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => setUserProfile(!userProfile)}
          >
            <img
              className='rounded-full w-8 h-8'
              src='data:image/jpeg;base64,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'
              alt=''
            />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Julia
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {search && <Searchbar setSearch={setSearch} search={search} />}
        {cart && (
          <Cart setCart={setCart} cart={cart} currentColor={currentColor} />
        )}
        {chat && (
          <Chat setChat={setChat} chat={chat} currentColor={currentColor} />
        )}
        {notification && (
          <Notification
            setNotification={setNotification}
            notification={notification}
            currentColor={currentColor}
          />
        )}
        {userProfile && (
          <UserProfile
            setUserProfile={setUserProfile}
            userProfile={userProfile}
            currentColor={currentColor}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
