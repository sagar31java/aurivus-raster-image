import React, { useState } from 'react';
import '../css/cell-grid.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


export const CellGrid = ({ rows, cols }) => {
  const [visibleCells, setVisibleCells] = useState(Array(rows * cols).fill(true));

  const toggleCellVisibility = (index) => {
    const newVisibility = [...visibleCells];
    newVisibility[index] = !newVisibility[index];
    setVisibleCells(newVisibility);
  };

  return (
    <div className="grid-container">
      <div className="cell-list">
        {Array.from({ length: rows * cols }, (itr, index) => (
          <div
            key={index}
            className="cell-item"
            onMouseEnter={() => document.getElementById(`cell-${index}`).classList.add('show')}
            onMouseLeave={() => document.getElementById(`cell-${index}`).classList.remove('show')}
            onClick={() => toggleCellVisibility(index)}
          >

            <span className="eye-icon">{visibleCells[index] ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon>}</span>
            <span className='cell-list-text'>&nbsp;{`Cell ${index + 1}`}</span>
          </div>
        ))}
      </div>
      <div className="image-container">
        <img src="./images/img_static.jpg" alt="Raster House" className="static-image" />
        <div className="grid-overlay">
          {Array.from({ length: rows }, (itr, rowIndex) =>
            Array.from({ length: cols }, (itr, colIndex) => {
              const index = rowIndex * cols + colIndex;
              return (
                <div
                  key={index}
                  id={`cell-${index}`}
                  className={`grid-cell ${visibleCells[index] ? '' : 'hidden'}`}
                  style={{
                    gridRow: rowIndex + 1,
                    gridColumn: colIndex + 1,
                  }}
                >
                  {`Cell ${index + 1}`}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CellGrid;