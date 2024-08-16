import React, { useState } from 'react';
import Widget from './widget';
import AddWidgetDialog from './AddWidgetDialog';


const Dashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [widgets, setWidgets] = useState([]);

  const handleAddWidget = (newWidgets) => {
    setWidgets([...widgets, ...newWidgets]);
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>CNAPP Dashboard</h1>

        <div className="widget-controls">
      <button className="widget-btn add-widget" onClick={() => setIsDialogOpen(true)}>
        Add Widget <span className="plus-icon">+</span>
      </button>
      <button className="widget-btn refresh">
        <span className="refresh-icon">⟲</span>
      </button>
      <button className="widget-btn more-options">
        <span className="more-options-icon">⋮</span>
      </button>
      <div className="date-range">
        <span className="clock-icon">🕒</span> 
        <select>
          <option>Last 2 days</option>
          <option>Last week</option>
        </select>
      </div>
      </div>
       
      </div>
      <div className="grid">
        {/* CSPM Executive Dashboard */}
        <div>
          <h2>CSPM Executive Dashboard</h2>
          <div className='dashboard-section'>
          <Widget title="Cloud Accounts" />
          <Widget title="Cloud Account Risk Assessment" />
          <Widget/>
          {widgets.includes(1) && <Widget title="Widget 1" />}  {/* Example widget rendered */}
          {widgets.includes(2) && <Widget title="Widget 2" />}  {/* Example widget rendered */}
          </div>
        
        </div>
        {/* CWPP Dashboard */}
        <div>
        <h2>CWPP Dashboard</h2>
        <div className='dashboard-section'>
         
          <Widget title="Top 5 Namespace Specific Alerts" />
          <Widget title="Workload Alerts" />
          <Widget/>
        </div>
        </div>
       
        {/* Registry Scan */}
        <div>
          
          <h2>Registry Scan</h2>
          <div className='dashboard-section'>
          <Widget title="Image Risk Assessment" />
          <Widget title="Image Security Issues" />
          <Widget/>
          </div>
          
        </div>
      </div>

      <AddWidgetDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        onAdd={handleAddWidget} 
      />
    </div>
  );
};

export default Dashboard;





