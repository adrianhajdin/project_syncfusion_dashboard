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
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState(false);
  const { currentColor, activeMenu, setActiveMenu } = useStateContext();

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

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex">
        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          style={{ color: currentColor }}
          className="text-xl rounded-full p-3 hover:bg-light-gray sm:hidden"
        >
          {activeMenu ? (
            <TooltipComponent content="Close" position="BottomCenter">
              <MdOutlineCancel className="text-lg" />
            </TooltipComponent>
          ) : (
            <TooltipComponent content="Menu" position="BottomCenter">
              <AiOutlineMenu className="text-lg" />
            </TooltipComponent>
          )}
        </button>
        <TooltipComponent content="Menu" position="BottomCenter">
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray hidden sm:block "
          >
            <AiOutlineMenu />
          </button>
        </TooltipComponent>
        <TooltipComponent content="Search" position="BottomCenter">
          <Button
            state={search}
            setState={setSearch}
            icon={<FiSearch />}
            color={currentColor}
            bgHoverColor="light-gray"
            size="xl"
            borderRadius="50%"
          />
        </TooltipComponent>
      </div>
      <div className="flex">
        <TooltipComponent content="Cart" position="BottomCenter">
          <Button
            state={cart}
            setState={setCart}
            color={currentColor}
            icon={<FiShoppingCart />}
            bgHoverColor="light-gray"
            size="xl"
            borderRadius="50%"
          />
        </TooltipComponent>
        <TooltipComponent content="Chat" position="BottomCenter">
          <Button
            state={chat}
            setState={setChat}
            icon={<BsChatLeft />}
            dotColor="#03C9D7"
            color={currentColor}
            bgHoverColor="light-gray"
            size="lg"
            borderRadius="50%"
          />
        </TooltipComponent>
        <TooltipComponent content="Notification" position="BottomCenter">
          <Button
            state={notification}
            setState={setNotification}
            icon={<RiNotification3Line />}
            dotColor="rgb(254, 201, 15)"
            color={currentColor}
            bgHoverColor="light-gray"
            size="xl"
            borderRadius="50%"
          />
        </TooltipComponent>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => setUserProfile(!userProfile)}
          >
            <img
              className="rounded-full w-8 h-8"
              src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-carson_darrin.png"
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {search && <Searchbar setSearch={setSearch} search={search} />}
        {cart && (<Cart setCart={setCart} cart={cart} currentColor={currentColor} />)}
        {chat && (<Chat setChat={setChat} chat={chat} currentColor={currentColor} />)}
        {notification && (<Notification setNotification={setNotification} notification={notification} currentColor={currentColor} />)}
        {userProfile && (<UserProfile setUserProfile={setUserProfile} userProfile={userProfile} currentColor={currentColor} />)}
      </div>
    </div>
  );
};

export default Navbar;
