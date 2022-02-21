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
import Header from '../components/Header';

const Orders = () => {
  let editing = { allowDeleting: true, allowEditing: true };
  const gridTemplate = (props) => {
    return (
      <div className='image'>
        <img
          className='rounded-xl h-20 md:ml-3'
          src={props.ProductImage}
          alt='order-item'
        />
      </div>
    );
  };

  const gridStatus = (props) => {
    return (
      <button
        style={{ background: props.StatusBg }}
        className='text-white py-1 px-2 capitalize rounded-2xl text-md'
      >
        {props.Status}
      </button>
    );
  };
  return (
    <div className='m-4 md:m-10 mt-24 min-h-590'>
      <Header category={'Page'} title={'Orders'} />

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
              headerText='Image'
              template={gridTemplate}
              textAlign='Center'
              width='120'
            />

            <ColumnDirective
              field='OrderItems'
              headerText='Item'
              width='150'
              editType='dropdownedit'
              textAlign='Center'
            ></ColumnDirective>
            <ColumnDirective
              field='CustomerName'
              headerText='Customer Name'
              width='150'
              textAlign='Center'
            ></ColumnDirective>

            <ColumnDirective
              field='TotalAmount'
              headerText='Total Amount'
              format='C2'
              textAlign='Center'
              editType='numericedit'
              width='150'
            />

            <ColumnDirective
              field='Status'
              template={gridStatus}
              headerText='Status'
              width='120'
              textAlign='Center'
            ></ColumnDirective>
            <ColumnDirective
              field='OrderID'
              headerText='Order ID'
              width='120'
              textAlign='Center'
              isPrimaryKey={true}
            ></ColumnDirective>

            <ColumnDirective
              field='Location'
              headerText='Location'
              width='150'
              textAlign='Center'
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
