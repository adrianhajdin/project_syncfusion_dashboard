import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems } from '../data/dummy';

const Orders = () => {
  let editing = { allowDeleting: true, allowEditing: true };
  const gridTemplate = () => {
    return (
      <div className='image'>
        <img
          className='rounded-full h-20 w-30'
          src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg'
          alt='employee'
        />
      </div>
    );
  };
  return (
    <div className='m-4 md:m-10 mt-12 md:mt-40'>
      <div className=' m-5 mt-10'>
        <GridComponent
          id='gridcomp'
          dataSource={ordersData}
          allowPaging={true}
          allowSorting={true}
          allowExcelExport={true}
          allowPdfExport={true}
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            <ColumnDirective
              headerText='Employee Image'
              template={gridTemplate}
              textAlign='Center'
            />
            <ColumnDirective
              field='OrderID'
              headerText='Order ID'
              width='120'
              textAlign='Right'
              isPrimaryKey={true}
            ></ColumnDirective>
            <ColumnDirective
              field='CustomerName'
              headerText='Customer Name'
            ></ColumnDirective>
            <ColumnDirective
              field='TotalAmount'
              headerText='Total Amount'
              format='C2'
              textAlign='Right'
              editType='numericedit'
            />
            <ColumnDirective
              field='Invoice'
              headerText='Invoice'
              width='200'
            ></ColumnDirective>
            <ColumnDirective
              field='OrderItems'
              headerText='Item'
              width='150'
              editType='dropdownedit'
            ></ColumnDirective>
            <ColumnDirective
              field='BillingCycle'
              headerText='Billing Cycle'
              width='150'
            ></ColumnDirective>
            <ColumnDirective
              field='Location'
              headerText='Location'
              width='150'
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      </div>
    </div>
  );
};
export default Orders;
