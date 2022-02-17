import React, { useState } from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import PropertyPane from '../components/PropertyPane';
import { scheduleData } from '../data/dummy';
/**
 * Schedule Default sample
 */
const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();
  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };
  const onDragStart = (args) => {
    args.navigation.enable = true;
  };
  console.log(scheduleObj);
  return (
    <div className='schedule-control-section m-4 md:m-10 mt-20 md:mt-40'>
      <div className='mt-10 mb-10'>
        <p className='text-lg text-gray-500'>App</p>
        <p className='text-3xl font-bold'>Calendar</p>
      </div>
      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
            height='650px'
            ref={(schedule) => setScheduleObj(schedule)}
            selectedDate={new Date(2021, 0, 10)}
            eventSettings={{ dataSource: scheduleData }}
            dragStart={onDragStart}
          >
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
              ]}
            />
          </ScheduleComponent>
        </div>
      </div>
      <div className='col-lg-3 property-section'>
        <PropertyPane>
          <table
            id='property'
            title='Properties'
            className='property-panel-table'
            style={{ width: '100%' }}
          >
            <tbody>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '100%' }}>
                  <div className='datepicker-control-section'>
                    <DatePickerComponent
                      value={new Date(2021, 0, 10)}
                      showClearButton={false}
                      placeholder='Current Date'
                      floatLabelType='Always'
                      change={change}
                    ></DatePickerComponent>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div>
    </div>
  );
};
export default Scheduler;
