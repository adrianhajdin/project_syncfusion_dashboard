import React from 'react';
const PropertyPane = (props) => {
  return (
    <div className='property-panel-section'>
      <div className='property-panel-content'>{props.children}</div>
    </div>
  );
};
export default PropertyPane;
