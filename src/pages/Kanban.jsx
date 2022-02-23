import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';

import { kanbanData } from '../data/dummy';
import Header from '../components/Header';

// TODO: Refactor
// TODO: Indentation to the left
const Kanban = () => (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category={'App'} title={'Kanban'} />
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

export default Kanban;
