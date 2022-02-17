import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div className='md:m-10 m-4 md:mt-40 mt-20'>
      <div className='w-full'>
        <AccumulationChartComponent
          id='pie-chart'
          title='Project Cost Breakdown'
          legendSettings={{
            visible: true,
            position: 'Top',
          }}
          enableSmartLabels={true}
        >
          <Inject
            services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Project'
              dataSource={pieChartData}
              xName='x'
              yName='y'
              innerRadius='40%'
              startAngle={0}
              endAngle={360}
              radius='70%'
              explode={true}
              explodeOffset='10%'
              explodeIndex={3}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#ffffff',
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};
export default Pie;
