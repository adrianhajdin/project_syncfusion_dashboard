import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from '@syncfusion/ej2-react-charts';
import { areaChartData } from '../../data/dummy';

const Area = () => {
  return (
    <div className='md:m-10 m-4 md:mt-40 mt-20'>
      <div className='w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={{
            valueType: 'DateTime',
            labelFormat: 'y',
            majorGridLines: { width: 0 },
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
          }}
          primaryYAxis={{
            labelFormat: '{value}%',
            lineStyle: { width: 0 },
            maximum: 4,
            interval: 1,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          title='Inflation Rate in Percentage'
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={areaChartData[0]}
              xName='x'
              yName='y'
              name='US'
              opacity={0.5}
              type='SplineArea'
              width={2}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={areaChartData[1]}
              xName='x'
              yName='y'
              name='France'
              opacity={0.5}
              type='SplineArea'
              width={2}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={areaChartData[2]}
              xName='x'
              yName='y'
              name='Germany'
              opacity={0.5}
              type='SplineArea'
              width={2}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
