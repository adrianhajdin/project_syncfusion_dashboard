import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { lineChartData } from '../../data/dummy';
import Header from '../../components/Header';

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category={'Chart'} title={'Line'} />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={{
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            background: 'white',
          }}
          primaryYAxis={{
            labelFormat: '{value}%',
            rangePadding: 'None',
            minimum: 0,
            maximum: 100,
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          title='Inflation - Consumer Price'
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={lineChartData[0]}
              xName='x'
              yName='y'
              name='Germany'
              width={2}
              marker={{ visible: true, width: 10, height: 10 }}
              type='Line'
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[1]}
              xName='x'
              yName='y'
              name='England'
              width={2}
              marker={{ visible: true, width: 10, height: 10 }}
              type='Line'
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Line;
