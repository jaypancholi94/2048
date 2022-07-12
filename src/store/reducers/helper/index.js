export const isGameOver = (grid, size) => {
    let flag = true;
    grid.map((row, rIndex) => {
        row.map((cell, cIndex) => {
            cell === 0 && (flag = false);
            rIndex < size - 1 &&
                cell === grid[rIndex + 1][cIndex] &&
                (flag = false);
            cIndex < size - 1 &&
                cell === grid[rIndex][cIndex + 1] &&
                (flag = false);
        });
    });

    return flag;
};
export const getEmptyOptions = (grid) => {
    let emptyOptions = [];
    grid.map((row, rIndex) => {
        row.map((cell, cIndex) => {
            cell === 0 &&
                (emptyOptions = [
                    ...emptyOptions,
                    { row: rIndex, cell: cIndex },
                ]);
        });
    });
    return emptyOptions;
};
export const spawnNumber = (grid, size) => {
    let duplicateGrid = [...grid];
    const options = getEmptyOptions(grid);

    if (options.length !== 0) {
        const randomPosition = Math.floor(Math.random() * options.length);
        const number = Math.random() < 0.5 ? 2 : 4;
        duplicateGrid[options[randomPosition].row][
            options[randomPosition].cell
        ] = number;
        // console.table(options);
        // console.log(options);
    }

    return duplicateGrid;
};
export const initiateGrid = (size) => {
    let grid = [...Array(size)].map((x) => Array(size).fill(0));
    grid = spawnNumber(grid, size);
    return grid;
};
export const slide = (row, direction) => {
    const values = row.filter((x) => x);
    const emptyCells = Array(row.length - values.length).fill(0);

    let returnRow = [];
    if (direction === "left") {
        returnRow = values.concat(emptyCells);
    } else {
        returnRow = emptyCells.concat(values);
    }
    return returnRow;
};
export const add = (row) => {
    let duplicateRow = [...row];
    let score = 0;
    duplicateRow.map((val, i) => {
        if (duplicateRow[i] === duplicateRow[i + 1]) {
            duplicateRow[i] = duplicateRow[i] + duplicateRow[i + 1];
            score += duplicateRow[i];
            duplicateRow[i + 1] = 0;
        }
    });
    return { row: duplicateRow, score: score };
};

export const buttonPressed = (grid, direction) => {
    let duplicateGrid = [...grid];
    let score = 0;

    duplicateGrid.map((row, i) => {
        let rowObject = {};
        if (direction === "left") {
            rowObject = add(slide(row, direction));
            duplicateGrid[i] = slide(rowObject.row, direction);
        } else {
            rowObject = add(slide(row.reverse(), direction));
            duplicateGrid[i] = slide(rowObject.row.reverse(), direction);
        }
        score += rowObject.score;
    });
    return { grid: duplicateGrid, score };
};

export const transposeGrid = (grid) => {
    return grid.map((_, colIndex) => grid.map((row) => row[colIndex]));
};
