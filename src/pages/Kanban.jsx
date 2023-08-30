import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  // Define a function to handle the button click event
  const handleButtonClick = (cardData) => {
    // Perform the desired action when the button is clicked
    console.log(`Button clicked for card with ID: ${cardData.Id}`);
    // You can add your custom logic here
  };

  // Define a template for the Kanban card content
  const cardTemplate = (cardData) => (
    <div>
      <h1>{cardData.Title}</h1>
      <div>{cardData.Summary}</div>
      <button type="button" onClick={() => handleButtonClick(cardData)}>Click Me</button>
    </div>
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ template: cardTemplate }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
