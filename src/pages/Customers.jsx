import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';
import { customersData } from '../data/dummy';
import Header from '../components/Header';

const Customers = () => {
  let selectionsettings = { persistSelection: true };
  let toolbarOptions = ['Delete'];
  let editing = { allowDeleting: true, allowEditing: true };
  const gridTemplate = (props) => {
    return (
      <div className='image flex gap-4'>
        <img
          className='rounded-full w-10 h-10'
          src={props.CustomerImage}
          alt='employee'
        />
        <div>
          <p>{props.CustomerName}</p>

          <p>{props.CustomerEmail}</p>
        </div>
      </div>
    );
  };
  const gridStatus = (props) => {
    return (
      <div className='flex gap-2 justify-center items-center text-gray-700 capitalize'>
        <p
          style={{ background: props.StatusBg }}
          className='rounded-full h-3 w-3'
        ></p>
        <p>{props.Status}</p>
      </div>
    );
  };
  return (
    <div className='mt-10 md:mt-24 min-h-590 m-4'>
      <Header category={'Page'} title={'Customers'} />

      <div className='control-section'>
        <GridComponent
          dataSource={customersData}
          enableHover={false}
          allowPaging={true}
          pageSettings={{ pageCount: 5 }}
          selectionSettings={selectionsettings}
          toolbar={toolbarOptions}
          editSettings={editing}
        >
          <ColumnsDirective>
            <ColumnDirective type='checkbox' width='50'></ColumnDirective>

            <ColumnDirective
              headerText='Name'
              width='150'
              template={gridTemplate}
              textAlign='Center'
            />

            <ColumnDirective
              field='ProjectName'
              headerText='Project Name'
              width='150'
              textAlign='Center'
            ></ColumnDirective>

            <ColumnDirective
              field='Status'
              headerText='Status'
              width='130'
              format='yMd'
              textAlign='Center'
              template={gridStatus}
            />
            <ColumnDirective
              field='Weeks'
              headerText='Weeks'
              width='100'
              format='C2'
              textAlign='Center'
            />
            <ColumnDirective
              field='Budget'
              headerText='Budget'
              width='100'
              format='yMd'
              textAlign='Center'
            ></ColumnDirective>
            <ColumnDirective
              field='Location'
              headerText='Location'
              width='150'
              textAlign='Center'
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </div>
  );
};
export default Customers;
