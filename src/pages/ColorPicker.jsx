import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
const ColorPicker = () => {
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor =
      args.currentValue.hex;
  };

  return (
    <div className='m-4 md:m-10 mt-20 md:mt-40 h-screen'>
      <div className='mt-10 mb-10'>
        <p className='text-lg text-gray-500'>App</p>
        <p className='text-3xl font-bold'>Color Picker</p>
      </div>
      <div className='inline control-section'>
        <div id='inline-control'>
          <div className='row'>
            <div id='preview'></div>
          </div>
          <div
            id='inline-content'
            className='flex justify-center items-center gap-20 flex-wrap'
          >
            <div className='col-xs-12 col-sm-12 col-lg-6 col-md-6'>
              <h4>Inline Palette</h4>
              <ColorPickerComponent
                id='inline-palette'
                mode='Palette'
                modeSwitcher={false}
                inline={true}
                showButtons={false}
                change={change}
              ></ColorPickerComponent>
            </div>
            <div className='col-xs-12 col-sm-12 col-lg-6 col-md-6'>
              <h4>Inline Picker</h4>
              <ColorPickerComponent
                id='inline-picker'
                mode='Picker'
                modeSwitcher={false}
                inline={true}
                showButtons={false}
                change={change}
              ></ColorPickerComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ColorPicker;
