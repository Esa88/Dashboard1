import React from 'react';

const Widget = ({ title }) => {
  return (
    <div className="widget">
      <div className="widget-header">{title}</div>
      <div className="widget-content">Content goes here</div>
      <div className="add-widget">+ Add Widget</div>
    </div>
  );
};

export default Widget;
