/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette() {
    return {
        // mode: theme?.customization?.navType,
        /* common: {
            black: theme.colors?.darkPaper,
        }, */
        primary: {
            light: "#E3F2FD",
            main: "#2196F3",
            dark: "#1E88E5",
        },
        secondary: {
            light: "#EDE7F6",
            main: "#673AB7",
            dark: "#5E35B1",
        },
        error: {
            light: "#EF9A9A",
            main: "#F44336",
            dark: "#C62828",
        },
        orange: {
            light: "#FBE9E7",
            main: "#FFAB91",
            dark: "#D84315",
        },
        warning: {
            light: "#B9F6CA",
            main: "#FFE57F",
            dark: "#FFC107",
        },
        success: {
            light: "#B9F6CA",
            main: "#69F0AE",
            dark: "#00C853",
        },
        grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            900: "#212121",
        },
        /* dark: {
            light: theme.colors?.darkTextPrimary,
            main: theme.colors?.darkLevel1,
            dark: theme.colors?.darkLevel2,
            800: theme.colors?.darkBackground,
            900: theme.colors?.darkPaper,
        }, */
        /* text: {
            primary: theme.darkTextPrimary,
            secondary: theme.darkTextSecondary,
            dark: theme.textDark,
            hint: theme.colors?.grey100,
        }, */
        background: {
            paper: "#EEEEEE",
            default: "#fafafa",
            // testCase: "",
        },
    };
}
