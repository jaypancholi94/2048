import { createTheme } from "@mui/material/styles";

import themePalette from "./palette";
import themeTypography from "./typography";

export const theme = () => {
    const themeOptions = {
        direction: "ltr",
        palette: themePalette(),
        // typography: themeTypography(),
    };

    const themes = createTheme(themeOptions);

    return themes;
};
export default theme;
