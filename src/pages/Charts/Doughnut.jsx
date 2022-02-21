import * as React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { doughnutChartData } from '../../data/dummy';

const Doughnut = () => {
  return (
    <div className='control-pane bg-transparent'>
      <div className='control-section w-40 bg-transparent'>
        <AccumulationChartComponent
          id='pie-chart'
          title=''
          legendSettings={{
            visible: true,
            position: 'Top',
          }}
          enableSmartLabels={true}
          height={'180px'}
        >
          <Inject
            services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Project'
              dataSource={doughnutChartData}
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
