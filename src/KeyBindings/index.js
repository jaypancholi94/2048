import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Project Imports
import { SET_MENU, LEFT, RIGHT, UP, DOWN } from "store/actions";

const KeyBindings = () => {
    const dispatch = useDispatch();
    const gameSettings = useSelector((state) => state.gameSettings);

    const keyBindings = useCallback((event) => {
        // console.log(event.key);
        switch (event.key) {
            case "Escape":
                return dispatch({ type: SET_MENU, menu: !gameSettings.menu });
            case "ArrowLeft":
                return dispatch({ type: LEFT });
            case "ArrowRight":
                return dispatch({ type: RIGHT });
            case "ArrowDown":
                return dispatch({ type: DOWN });
            case "ArrowUp":
                return dispatch({ type: UP });
            default:
                break;
        }
        /*  if (event.key === "Escape") {
            //Do whatever when esc is pressed
        } */
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", keyBindings, false);

        return () => {
            document.removeEventListener("keydown", keyBindings, false);
        };
    }, []);

    return <></>;
};

export default KeyBindings;
