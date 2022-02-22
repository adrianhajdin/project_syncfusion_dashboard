import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from '@syncfusion/ej2-react-charts';

import Header from '../../components/Header';
import { PyramidData } from '../../data/dummy';

const Pyramid = () => {
  return (
    <div className='m-4 md:m-10 mt-24  p-10 bg-white rounded-3xl'>
      <Header category={'Chart'} title={'Pyramid'} />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          title='Food Comparison Chart'
          legendSettings={{
            visible: false,
          }}
          tooltip={{
            enable: true,
          }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode={true}
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};
export default Pyramid;
