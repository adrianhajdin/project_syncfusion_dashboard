import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-grids';
import { GrLocation } from 'react-icons/gr';

import { employeesData } from '../data/dummy';
import Header from '../components/Header';

const Employees = () => {
  let toolbarOptions = ['Search'];

  const gridTemplate = (props) => {
    return (
      <div className='flex items-center gap-2'>
        <img
          className='rounded-full w-10 h-10'
          src={props.EmployeeImage}
          alt='employee'
        />
        <p>{props.Name}</p>
      </div>
    );
  };

  const gridCountry = (props) => {
    return (
      <div className='flex items-center justify-center gap-2'>
        <GrLocation />
        <span>{props.Country}</span>
      </div>
    );
  };

  let editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category={'Page'} title={'Employees'} />

      <div>
        <GridComponent
          dataSource={employeesData}
          width='auto'
          allowPaging={true}
          allowSorting={true}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            <ColumnDirective
              headerText='Employee'
              width='150'
              template={gridTemplate}
              textAlign='Center'
            />

            <ColumnDirective
              field='Title'
              headerText='Designation'
              width='170'
              textAlign='Center'
            />
            <ColumnDirective
              headerText='Country'
              width='120'
              textAlign='Center'
              template={gridCountry}
            />
            <ColumnDirective
              field='HireDate'
              headerText='Hire Date'
              width='135'
              format='yMd'
              textAlign='Center'
            />
            <ColumnDirective
              field='ReportsTo'
              headerText='Reports To'
              width='120'
              textAlign='Center'
            />

            <ColumnDirective
              field='EmployeeID'
              headerText='Employee ID'
              width='125'
              textAlign='Center'
            />
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>
  );
};
export default Employees;
