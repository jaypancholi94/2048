import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
// defaultTheme
import theme from "Theme";

// Project imports
import MainLayout from "layout";
import { store } from "store";
import KeyBindings from "KeyBindings";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={theme()}>
                    <MainLayout />
                    <KeyBindings />
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default App;
