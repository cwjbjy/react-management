import FleetModel from "./components/china";
import "./index.scss";
import React from 'react'

const FleetLine = () => {
  return (
    <div className="fleetLine">
      <FleetModel />
    </div>
  );
};

export default React.memo(FleetLine);
