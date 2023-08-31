import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid, medicalproBranding } from '../data/dummy';
import { Header, Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const { currentColor } = useStateContext();
  // Define a function to handle the button click event
  const handleButtonClick = (cardData) => {
    // Perform the desired action when the button is clicked
    console.log(`Button clicked for card with ID: ${cardData.Id}`);
    // You can add your custom logic here
  };

  const cardTemplate = (cardData) => (
    <div className="flex justify-between h-40">
      {/* Status bar */}
      <div className="w-3 h-full" style={{ backgroundColor: 'green' }} />
      {/* Card content */}
      <div className="flex flex-1 items-center ml-2">
        {/* Card content */}
        <div className="flex-1 h-full flex flex-col justify-between space-y-4">
          {/* Card top */}
          <div className="flex justify-between items-center">
            <h1 className="text-m font-semibold">{cardData.Title}</h1>
            <p>{cardData.Date}</p>
          </div>

          {/* Card middle */}
          <div>{cardData.Summary}</div>

          {/* Card bottom */}
          <div className="flex gap-2">
            {medicalproBranding.teams.map((item) => (
              <p
                key={item.name}
                style={{ background: item.color }}
                className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-3 flex flex-col items-end space-y-1 ">
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
    </div>
  );

  return (
    <div className="m-2 mt-24 p-2 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ template: cardTemplate, contentField: 'Summary', headerField: 'Id' }}
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
