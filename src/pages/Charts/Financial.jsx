import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts';
import { financialChartData } from '../../data/dummy';

let date1 = new Date('2017, 1, 1');
let returnValue = financialChartData.filter(filterValue);
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const Financial = () => {
  return (
    <div className='md:m-10 m-4 md:mt-40 mt-20'>
      <div className='w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={{
            valueType: 'DateTime',
            minimum: new Date('2016, 12, 31'),
            maximum: new Date('2017, 9, 30'),
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            title: 'Price',
            minimum: 100,
            maximum: 180,
            interval: 20,

            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
          }}
          legendSettings={{ visible: false }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          title='AAPL Historical'
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Hilo'
              low='low'
              high='high'
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default Financial;
