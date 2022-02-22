import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import PropertyPane from '../components/PropertyPane';
import { scheduleData } from '../data/dummy';
import Header from '../components/Header';

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (args) => {
    args.navigation.enable = true;
  };

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category={'App'} title={'Calendar'} />

      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
            height='650px'
            ref={(schedule) => setScheduleObj(schedule)}
            selectedDate={new Date(2021, 0, 10)}
            eventSettings={{ dataSource: scheduleData }}
            dragStart={onDragStart}
            background={'red'}
          >
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[ Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop ]} />
          </ScheduleComponent>
        </div>
      </div>
      <div className='col-lg-3 property-section'>
        <PropertyPane>
          <table
            id='property'
            title='Properties'
            className='property-panel-table'
            style={{ width: '100%', backgroud: 'blue' }}
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
                    />
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
