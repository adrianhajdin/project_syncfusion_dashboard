import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Scheduler from './pages/Scheduler';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Kanban from './pages/Kanban';

import './App.css';
import Line from './pages/Charts/Line';
import Area from './pages/Charts/Area';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie';
import Financial from './pages/Charts/Financial';
import ColorMapping from './pages/Charts/ColorMapping';
import Editor from './pages/Editor';
import ColorPicker from './pages/ColorPicker';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <BrowserRouter>
      <div className='flex relative'>
        {activeMenu ? (
          <div className='w-80 fixed sidebar'>
            <Sidebar activeMenu={activeMenu} />
          </div>
        ) : (
          <div className='w-0'>
            <Sidebar activeMenu={activeMenu} />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'bg-main-bg md:ml-80 w-full  '
              : 'bg-main-bg w-full flex-2 '
          }
        >
          <div className='fixed md:static bg-main-bg navbar w-full '>
            <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/ecommerce' element={<Home />} />
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
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
