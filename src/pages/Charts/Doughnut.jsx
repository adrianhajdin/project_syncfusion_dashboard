import * as React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { doughnutChartData } from '../../data/dummy';

const Doughnut = ({ currentMode }) => {
  return (
    <div className='control-pane bg-transparent ml-2'>
      <div className='control-section w-40'>
        <AccumulationChartComponent
          id='pie-chart'
          title=''
          legendSettings={{
            visible: false,
            position: 'Top',
          }}
          enableSmartLabels={true}
          height={'160px'}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Sale'
              dataSource={doughnutChartData}
              xName='x'
              yName='y'
              innerRadius='40%'
              startAngle={0}
              endAngle={360}
              radius='70%'
              explode={true}
              explodeOffset='10%'
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff',
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};
export default Doughnut;
