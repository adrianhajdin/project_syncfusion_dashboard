import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header, Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { adjustColorBrightness } from '../services/ColorManipulatorService';

const Kanban = () => {
  const { currentColor } = useStateContext();
  // Define a function to handle the button click event
  const handleButtonClick = (cardData) => {
    // Perform the desired action when the button is clicked
    console.log(`Button clicked for card with ID: ${cardData.Id}`);
    // You can add your custom logic here
  };

  const darkerColor = adjustColorBrightness(currentColor, -20);
  // Define a template for the Kanban card content
  const cardTemplate = (cardData) => (
    <div className="flex justify-between items-center m-2 rounded-2xl md:w-400 p-4" style={{ backgroundColor: darkerColor }}>
      <div>
        <h1>{cardData.Title}</h1>
        <div>{cardData.Summary}</div>
      </div>
      <div className="mt-3 flex flex-col items-end space-y-1">
        <div className="mb-2 p-0">
          <Button
            color="white"
            bgColor={currentColor}
            text="Flow"
            borderRadius="10px"
            onClick={() => handleButtonClick(cardData)}
            height={10}
          />
        </div>
        <div>
          <Button
            color="white"
            bgColor={currentColor}
            text="View"
            borderRadius="10px"
            onClick={() => handleButtonClick(cardData)}
            height={10}
          />
        </div>
      </div>
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
