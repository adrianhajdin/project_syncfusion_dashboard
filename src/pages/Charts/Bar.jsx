import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from '@syncfusion/ej2-react-charts';
import { barChartData } from '../../data/dummy';
import Header from '../../components/Header';

const Bar = () => {
  return (
    <div className='md:m-10 m-4 md:mt-24 mt-20 min-h-590'>
      <Header category={'Chart'} title={'Bar'} />

      <div className=' w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={{
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: { color: 'transparent' },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          title='Olympic Medal Counts - RIO'
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={barChartData[0]}
              xName='x'
              yName='y'
              name='Gold'
              type='Column'
              marker={{
                dataLabel: {
                  visible: true,
                  position: 'Top',
                  font: { fontWeight: '600', color: '#ffffff' },
                },
              }}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={barChartData[1]}
              xName='x'
              yName='y'
              name='Silver'
              type='Column'
              marker={{
                dataLabel: {
                  visible: true,
                  position: 'Top',
                  font: { fontWeight: '600', color: '#ffffff' },
                },
              }}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={barChartData[2]}
              xName='x'
              yName='y'
              name='Bronze'
              type='Column'
              marker={{
                dataLabel: {
                  visible: true,
                  position: 'Top',
                  font: { fontWeight: '600', color: '#ffffff' },
                },
              }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
