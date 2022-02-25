import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

import Button from './Button';

const Searchbar = () => (
  <div className="bg-half-transparent w-full h-screen fixed nav-item top-0 left-0">
    <div className=" w-full bg-white dark:bg-[#484B52] p-5">
      <div className="flex justify-between items-center gap-5">
        <TextBoxComponent placeholder="Search" cssClass="e-outline" floatLabelType="Auto" />

        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
    </div>
  </div>
);

export default Searchbar;
