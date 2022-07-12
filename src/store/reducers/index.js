import { combineReducers } from "redux";

// reducer import
import gameReducer from "./gameReducer";
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    gameSettings: gameReducer,
});

export default reducer;
