import React, { useState} from 'react';
import CellGrid from './components/CellGrid';
import './css/raster.css';

const App = () => {
  const [rows] = useState(2);
  const [cols] = useState(3);

  return (
    <div className="app">
      
      <div className="container">
        <CellGrid rows={rows} cols={cols} />
      </div>
    </div>
  );
};


export default App;