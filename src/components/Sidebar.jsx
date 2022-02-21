import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';

import { links } from '../data/dummy';

const Sidebar = ({ activeMenu, currentColor }) => {
  const activeStyle = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2`;
  const notActiveStyle =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen overflow-hidden hover:overflow-auto sm:mt-0 mt-10'>
      {activeMenu && (
        <>
          <Link to='/' className='items-center gap-3 ml-3 mt-4 hidden sm:flex'>
            {' '}
            <SiShopware className='text-xl dark:text-white' />{' '}
            <span className='text-xl font-bold dark:text-white'>Shoppy</span>
          </Link>
          <div className='mt-10 '>
            {links.map((item) => (
              <div>
                <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeStyle : notActiveStyle
                    }
                  >
                    {link.icon}
                    <span className='capitalize '>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
