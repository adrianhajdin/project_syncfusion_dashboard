import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
import Searchbar from './Searchbar';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex">

        <TooltipComponent content="Menu" position="BottomCenter">
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray"
          >
            <AiOutlineMenu />
          </button>
        </TooltipComponent>
        <TooltipComponent content="Search" position="BottomCenter">
          <button
            type="button"
            onClick={() => handleClick('search')}
            style={{ color: currentColor, borderRadius: '50%' }}
            className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSearch />
          </button>

        </TooltipComponent>
      </div>
      <div className="flex">
        <TooltipComponent content="Cart" position="BottomCenter">
          <button
            type="button"
            onClick={() => handleClick('cart')}
            style={{ color: currentColor, borderRadius: '50%' }}
            className="text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiShoppingCart />
          </button>

        </TooltipComponent>
        <TooltipComponent content="Chat" position="BottomCenter">
          <button
            type="button"
            onClick={() => handleClick('chat')}
            style={{ color: currentColor, borderRadius: '50%' }}
            className="relative text-lg p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <span
              style={{ background: '#03C9D7' }}
              className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            <BsChatLeft />
          </button>

        </TooltipComponent>
        <TooltipComponent content="Notification" position="BottomCenter">
          <button
            type="button"
            onClick={() => handleClick('notification')}
            style={{ color: currentColor, borderRadius: '50%' }}
            className="relative text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <span
              style={{ background: 'rgb(254, 201, 15)' }}
              className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            <RiNotification3Line />
          </button>

        </TooltipComponent>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
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

        {isClicked.search && <Searchbar />}
        {isClicked.cart && (<Cart currentColor={currentColor} />)}
        {isClicked.chat && (<Chat currentColor={currentColor} />)}
        {isClicked.notification && (<Notification currentColor={currentColor} />)}
        {isClicked.userProfile && (<UserProfile currentColor={currentColor} />)}
      </div>
    </div>
  );
};

export default Navbar;
