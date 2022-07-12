import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// UI imports
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    SwipeableDrawer,
    Grid,
    Divider,
    Slider,
    Button,
} from "@mui/material";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";

// Project Imports
import { CHANE_GRID_SIZE, SET_MENU } from "store/actions";

const Header = () => {
    const gameSettings = useSelector((state) => state.gameSettings);

    const dispatch = useDispatch();

    // const [drawerState, setDrawerState] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [gridSize, setGridSize] = useState(4);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        dispatch({ type: SET_MENU, menu: open });
        // setDrawerState(open);
    };
    // console.log(gameSettings);
    const renderSetting = (
        <>
            <Box sx={{ width: 360, bgcolor: "background.paper", p: 2 }}>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Typography variant="h5" component="h6">
                            Settings
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Grid Size</Typography>
                        <Box sx={{ p: 2 }}>
                            <Slider
                                aria-label="Grid Size"
                                defaultValue={4}
                                // getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={2}
                                max={8}
                                onChange={(event) => {
                                    setButtonVisible(
                                        event.target.value !== gameSettings?.size ? true : false
                                    );

                                    setGridSize(event.target.value);
                                }}
                            />
                        </Box>
                    </Grid>
                    {buttonVisible && (
                        <Grid item xs={12} align="right">
                            <Button
                                variant="contained"
                                onClick={() => {
                                    dispatch({ type: CHANE_GRID_SIZE, size: gridSize });
                                    setButtonVisible(false);
                                }}
                            >
                                Save
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    );

    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <SportsEsportsIcon fontSize="large" sx={{ mr: 2 }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            2048
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{}}
                            onClick={toggleDrawer(true)}
                        >
                            <SettingsIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <SwipeableDrawer
                anchor="right"
                open={gameSettings.menu}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {renderSetting}
            </SwipeableDrawer>
        </>
    );
};
export default Header;
