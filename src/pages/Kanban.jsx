import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { kanbanData } from '../data/dummy';

const Kanban = () => {
  return (
    <div className='m-4 md:m-10 mt-20 md:mt-40 h-screen'>
      <div className='mt-10 mb-10'>
        <p className='text-lg text-gray-500'>App</p>
        <p className='text-3xl font-bold'>Kanban</p>
      </div>
      <div>
        <div>
          <KanbanComponent
            id='kanban'
            keyField='Status'
            dataSource={kanbanData}
            cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
          >
            <ColumnsDirective>
              <ColumnDirective
                headerText='To Do'
                keyField='Open'
                allowToggle={true}
              />
              <ColumnDirective
                headerText='In Progress'
                keyField='InProgress'
                allowToggle={true}
              />
              <ColumnDirective
                headerText='Testing'
                keyField='Testing'
                allowToggle={true}
                isExpanded={false}
              />
              <ColumnDirective
                headerText='Done'
                keyField='Close'
                allowToggle={true}
              />
            </ColumnsDirective>
          </KanbanComponent>
        </div>
      </div>
    </div>
  );
};
export default Kanban;
