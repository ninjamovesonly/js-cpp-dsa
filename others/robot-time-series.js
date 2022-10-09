const robotTimeSeries = (grid, numberOfRobots) => {
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0]; column++) {
      if (grid[row][column] === 1) {
        if (
          !(
            grid[row - 1][column - 1] === 1 ||
            grid[row - 1][column] === 1 ||
            grid[row - 1][column + 1] === 1
          )
        ) {
          return false;
        }
      }
    }
  }
  return true;
};
