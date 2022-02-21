import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { themeColors } from '../data/dummy';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Button from './Button';

const ThemeSettings = ({
  setThemeSettings,
  themeSettings,
  setCurrentColor,
  setCurrentMode,
  currentColor,
  currentMode,
}) => {
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400'>
        <div className='flex justify-between items-center p-4'>
          <p className='font-semibold text-lg'>Settings</p>

          <Button
            state={themeSettings}
            setState={setThemeSettings}
            icon={<MdOutlineCancel />}
            color={'rgb(153, 171, 180)'}
            bgHoverColor={'light-gray'}
            size={'2xl'}
            borderRadius={'full'}
          />
        </div>
        <div className='flex-col border-t-1 border-color p-4'>
          <p className='font-semibold text-xl '>Theme Option</p>

          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='cursor-pointer'
              onChange={setMode}
              checked={'Light' === currentMode ? true : false}
            />
            <label for='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-2'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              onChange={setMode}
              className='cursor-pointer'
              checked={'Dark' === currentMode ? true : false}
            />
            <label for='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <div className='p-4 border-t-1 border-color'>
          <p className='font-semibold text-xl '>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item) => (
              <TooltipComponent
                content={item.name}
                position={'TopCenter'}
                tabIndex={0}
              >
                <div
                  className='relative mt-2 cursor-pointer flex gap-5 items-center'
                  key={item.name}
                >
                  <button
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
