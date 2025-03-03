import React, { useState} from 'react';
import CellGrid from './components/CellGrid';
import './css/raster.css';

const App = () => {
  const [rows] = useState(2); // setting initial value of rows of cells
  const [cols] = useState(3); // setting initial value of columns of cells

  return (
    <div className="app">
      
      <div className="container">
        <CellGrid rows={rows} cols={cols} /> {/*  CellGrid is a functional component which renders all the functionality of the application. */}
      </div>
    </div>
  );
};


export default App;