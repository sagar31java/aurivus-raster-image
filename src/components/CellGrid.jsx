import React, { useState } from 'react';
import '../css/cell-grid.css'; //css for managing css for CellGrid
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // using Material UI for eye cross icon
import VisibilityIcon from '@mui/icons-material/Visibility'; // using Material UI for show eye icon


export const CellGrid = ({ rows, cols }) => {
  const [visibleCells, setVisibleCells] = useState(Array(rows * cols).fill(true)); //creating hooks to store array of[rows,columns]

  const toggleCellVisibility = (index) => {
    const newVisibility = [...visibleCells];  // setting new visibility whenever eye icon on a cell is clicked
    newVisibility[index] = !newVisibility[index]; 
    setVisibleCells(newVisibility);
  };

  return (
    <div className="grid-container">
      <div className="cell-list"> {/*list of cells, that will be displayed on left-side*/}
        {Array.from({ length: rows * cols }, (itr, index) => ( //iterating array of cells with given rows and columns, and iterating by index to create display of each cell
          <div
            key={index}
            className="cell-item"
            onMouseEnter={() => document.getElementById(`cell-${index}`).classList.add('show')}
            onMouseLeave={() => document.getElementById(`cell-${index}`).classList.remove('show')}
            onClick={() => toggleCellVisibility(index)}
          >

            <span className="eye-icon">{visibleCells[index] ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon>}</span> {/* Ternary operator for conditional rendering eye icon*/}
            <span className='cell-list-text'>&nbsp;{`Cell ${index + 1}`}</span> {/*iterating cells using index */}
          </div>
        ))}
      </div>
      <div className="image-container"> {/*container for displayimg image (shown on right-side) */}
        <img src="./images/img_static.jpg" alt="Raster House" className="static-image" />
        <div className="grid-overlay">
          {Array.from({ length: rows }, (itr, rowIndex) => // iterating array on rows
            Array.from({ length: cols }, (itr, colIndex) => { //iterating array on columns
              const index = rowIndex * cols + colIndex;
              return (
                <div
                  key={index}
                  id={`cell-${index}`}
                  className={`grid-cell ${visibleCells[index] ? '' : 'hidden'}`} //ternary operator for show/hide visibility of cells on image
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