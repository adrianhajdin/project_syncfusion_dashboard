import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';
import { colorMappingData } from '../../data/dummy';

const ColorMapping = () => {
  return (
    <div className='md:m-10 m-4 md:mt-40 mt-20'>
      <div className='w-full'>
        <ChartComponent
          id='charts'
          style={{ textAlign: 'center' }}
          primaryXAxis={{
            valueType: 'Category',
            majorGridLines: { width: 0 },
            title: 'Months',
          }}
          primaryYAxis={{
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}°C',
            title: 'Temperature',
          }}
          title='USA CLIMATE - WEATHER BY MONTH'
          chartArea={{ border: { width: 0 } }}
          legendSettings={{
            mode: 'Range',
          }}
          tooltip={{
            enable: true,
          }}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name='USA'
              xName='x'
              yName='y'
              type='Column'
              animation={{ enable: false }}
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            <RangeColorSettingDirective
              label='1°C to 10°C'
              start={1}
              end={10}
              colors={colorMappingData[1]}
            ></RangeColorSettingDirective>
            <RangeColorSettingDirective
              label='11°C to 20°C'
              start={11}
              end={20}
              colors={colorMappingData[2]}
            ></RangeColorSettingDirective>
            <RangeColorSettingDirective
              label='21°C to 30°C'
              start={21}
              end={30}
              colors={colorMappingData[3]}
            ></RangeColorSettingDirective>
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default ColorMapping;
