// action - state management
import * as actionTypes from "../actions/";
import {
    initiateGrid,
    isGameOver,
    buttonPressed,
    transposeGrid,
    spawnNumber,
} from "./helper";

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
