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

  return (
    <div className='control-pane md:m-10 m-4'>
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
              headerText='Customer'
              width='180'
              template={gridTemplate}
              textAlign='Center'
            />

            <ColumnDirective
              field='ProjectName'
              headerText='Project Name'
              width='150'
            ></ColumnDirective>

            <ColumnDirective
              field='Status'
              headerText='Status'
              width='130'
              format='yMd'
              textAlign='Right'
            />
            <ColumnDirective
              field='Weeks'
              headerText='Weeks'
              width='100'
              format='C2'
              textAlign='Right'
            />
            <ColumnDirective
              field='Budget'
              headerText='Budget'
              width='100'
              format='yMd'
              textAlign='Right'
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </div>
  );
};
export default Customers;
