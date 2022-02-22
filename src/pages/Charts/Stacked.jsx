import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedChartData } from '../../data/dummy';

const Stacked = ({ currentMode }) => {
  return (
    <ChartComponent
      id='charts'
      primaryXAxis={{
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        labelIntersectAction: 'Rotate45',
        valueType: 'Category',
      }}
      primaryYAxis={{
        lineStyle: { width: 0 },
        minimum: 100,
        maximum: 400,
        interval: 100,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}',
      }}
      width={'320px'}
      height={'70%'}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={stackedChartData[0]}
          xName='x'
          yName='y'
          name='Budget'
          type='StackingColumn'
          style={{ background: 'blue' }}
        />
        <SeriesDirective
          dataSource={stackedChartData[1]}
          xName='x'
          yName='y'
          name='Expense'
          type='StackingColumn'
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
