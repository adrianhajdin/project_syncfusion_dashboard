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
import Header from '../../components/Header';

const Area = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category={'Chart'} title={'Area'} />
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
