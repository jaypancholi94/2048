// action - state management
import * as actionTypes from "../actions/";

/* const isCellEmpty = (grid, position) => {
    let flag = false;
    return grid[position.row][position.cell] === 0 ? true : false;
}; */

export const generateRandom = (size) => {
    return Math.floor(Math.random() * size);
};

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
    // return grid.map((_, colIndex) => grid.map((row) => row[colIndex]));
    let result = [];
    for (let i = 0; i < grid.length; i++) {
        let col = [];
        for (let j = 0; j < grid.length; j++) {
            col = [...col, grid[j][i]];
        }
        result = [...result, col];
    }
    return result;
};

// Initial State Values
export const initialState = {
    grid: initiateGrid(4),
    size: 4,
    menu: false,
    gameOver: false,
    score: 0,
};

const authReducer = (state = initialState, action) => {
    var isGameOverFlag = isGameOver(state.grid, state.size);

    switch (action.type) {
        case actionTypes.SET_MENU:
            return {
                ...state,
                menu: action.menu,
            };
        case actionTypes.CHANE_GRID_SIZE:
            return {
                ...state,
                grid: initiateGrid(action.size),
                size: action.size,
            };
        case actionTypes.LEFT:
            var buttonPressedObject = buttonPressed(state.grid, "left");
            return {
                ...state,
                grid: isGameOverFlag
                    ? state.grid
                    : spawnNumber(buttonPressedObject.grid, state.size),
                gameOver: isGameOverFlag,
                score: state.score + buttonPressedObject.score,
            };
        case actionTypes.RIGHT:
            var buttonPressedObject = buttonPressed(state.grid, "right");
            return {
                ...state,
                grid: isGameOverFlag
                    ? state.grid
                    : spawnNumber(buttonPressedObject.grid, state.size),
                gameOver: isGameOverFlag,
                score: state.score + buttonPressedObject.score,
            };
        case actionTypes.UP:
            var buttonPressedObject = buttonPressed(
                transposeGrid(state.grid),
                "left"
            );
            return {
                ...state,
                grid: isGameOverFlag
                    ? state.grid
                    : spawnNumber(
                          transposeGrid(buttonPressedObject.grid, state.size)
                      ),
                gameOver: isGameOverFlag,
                score: state.score + buttonPressedObject.score,
            };
        case actionTypes.DOWN:
            var buttonPressedObject = buttonPressed(
                transposeGrid(state.grid),
                "right"
            );

            return {
                ...state,
                grid: isGameOverFlag
                    ? state.grid
                    : spawnNumber(
                          transposeGrid(buttonPressedObject.grid, state.size)
                      ),
                gameOver: isGameOverFlag,
                score: state.score + buttonPressedObject.score,
            };
        case actionTypes.RESTART:
            return {
                ...state,
                grid: initiateGrid(state.size),
                menu: false,
                gameOver: false,
                score: 0,
            };
        default:
            return state;
    }
};

export default authReducer;
