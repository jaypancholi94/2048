// UI Imports
import { useTheme } from "@mui/material/styles";

// Project imports
import Tiles from "view/Tiles";

const MainBody = () => {
    const theme = useTheme(useTheme);
    // console.log(theme);
    return (
        <>
            <Tiles />
        </>
    );
};

export default MainBody;
