import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Scheduler from './pages/Calendar';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Kanban from './pages/Kanban';
import Line from './pages/Charts/Line';
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie';
import Financial from './pages/Charts/Financial';
import ColorMapping from './pages/Charts/ColorMapping';
import Editor from './pages/Editor';
import ColorPicker from './pages/ColorPicker';
import Button from './components/Button';
import ThemeSettings from './components/ThemeSettings';
import Pyramid from './pages/Charts/Pyramid';
import './App.css';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState('#7352FF');
  const [currentMode, setCurrentMode] = useState('Light');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    setCurrentColor(currentThemeColor);
    setCurrentMode(currentThemeMode);
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent
              content={'Settings'}
              position={'Top'}
              tabIndex={0}
            >
              <Button
                setState={setThemeSettings}
                state={themeSettings}
                icon={<FiSettings />}
                bgColor={currentColor}
                color={'white'}
                size={'3xl'}
                borderRadius={'full'}
              />
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
              <Sidebar activeMenu={activeMenu} currentColor={currentColor} />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar activeMenu={activeMenu} />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                currentColor={currentColor}
              />
            </div>
            <div>
              {themeSettings && (
                <ThemeSettings
                  setThemeSettings={setThemeSettings}
                  themeSettings={themeSettings}
                  currentColor={currentColor}
                  currentMode={currentMode}
                  setCurrentColor={setCurrentColor}
                  setCurrentMode={setCurrentMode}
                />
              )}

              <Routes>
                <Route
                  path='/'
                  element={
                    <Home
                      currentColor={currentColor}
                      currentMode={currentMode}
                    />
                  }
                />

                <Route
                  path='/ecommerce'
                  element={
                    <Home
                      currentColor={currentColor}
                      currentMode={currentMode}
                    />
                  }
                />
                <Route path='/orders' element={<Orders />} />
                <Route path='/calendar' element={<Scheduler />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />

                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
