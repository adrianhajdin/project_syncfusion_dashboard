import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import Header from '../components/Header';

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  };

  const CustomColorPicker = ({ id, mode }) => (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher={false}
      inline={true}
      showButtons={false}
      change={change}
    />
  );

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category={'App'} title={'Color Picker'} />
      
      <div className='inline control-section'>
        <div id='inline-control'>
          <div className='row'>
            <div id='preview'></div>
          </div>
          <div id='inline-content' className='flex justify-center items-center gap-20 flex-wrap' >
            <div>
              <p className='text-2xl font-semibold dark:text-gray-200 mt-2 mb-4'>Inline Pallete</p>
              <CustomColorPicker id='inline-palette' mode='Palette'  />
            </div>
            <div>
              <p className='text-2xl font-semibold dark:text-gray-200 mt-2 mb-4'>Inline Picker</p>
              <CustomColorPicker id='inline-picker' mode='Picker'  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
