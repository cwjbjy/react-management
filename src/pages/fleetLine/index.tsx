import React from 'react';
import FleetModel from './components/china';
import './index.scss';

const FleetLine = () => {
  return (
    <div className="fleetLine">
      <FleetModel />
    </div>
  );
};

export default React.memo(FleetLine);
