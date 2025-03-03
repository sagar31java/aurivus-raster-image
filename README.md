Explanation of Interaction Logic

1) State Management: The application uses React's useState to manage the number of rows and columns (rows and cols) and the visibility of each cell in the raster grid (visibility).

2) Rendering Cells:
The renderCells function generates the grid cells based on the specified number of rows and columns. Each cell is represented as a div with a unique ID and a class that determines its visibility.

3)Interactivity:
Hover Functionality: When a user hovers over a cell name in the list (the sidebar), the corresponding cell on the image is highlighted by adding a highlight class, which changes its border color.
 
Click Functionality: Clicking on a cell name toggles its visibility on the image. This is achieved by updating the visibility state, which determines whether the cell is displayed or hidden.

4) Styling:
Basic CSS styles are provided to create a clean layout, including the sidebar for the list of cells and the grid overlay on the image.