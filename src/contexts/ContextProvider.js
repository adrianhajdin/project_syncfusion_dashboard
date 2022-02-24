import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('#7352FF');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
