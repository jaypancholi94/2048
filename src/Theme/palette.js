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
        tiles: {
            0: {
                bgcolor: "#f0f3f5",
                fontSize: 40,
            },
            2: {
                bgcolor: "#b4bfcb",
                fontSize: 40,
            },
            4: {
                bgcolor: "#a5b2c0",
                fontSize: 40,
            },
            8: {
                bgcolor: "#96a5b6",
                fontSize: 40,
            },
            16: {
                bgcolor: "#8798ab",
                fontSize: 40,
            },
            32: {
                bgcolor: "#788ca1",
                fontSize: 40,
            },
            64: {
                bgcolor: "#697f96",
                fontSize: 40,
            },
            128: {
                bgcolor: "#5e7287",
                fontSize: 32,
            },
            256: {
                bgcolor: "#546578",
                color: "#fff",
                fontSize: 32,
            },
            512: {
                bgcolor: "#495969",
                color: "#fff",
                fontSize: 32,
            },
            1024: {
                bgcolor: "#3f4c5a",
                color: "#fff",
                fontSize: 24,
            },
            2048: {
                bgcolor: "#F44336",
                color: "#fff",
                fontSize: 24,
            },
            4096: {
                bgcolor: "#343f4b",
                color: "#fff",
                fontSize: 24,
            },
            8192: {
                bgcolor: "#343f4b",
                color: "#fff",
                fontSize: 24,
            },
            16384: {
                bgcolor: "#343f4b",
                color: "#fff",
                fontSize: 24,
            },
            32768: {
                bgcolor: "#343f4b",
                color: "#fff",
                fontSize: 24,
            },
        },
    };
}
