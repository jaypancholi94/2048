import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// UI imports
import { Box, Stack, Grid } from "@mui/material";
// Project Imports
import Tile from "./Tile";

const Tiles = () => {
    const gameSettings = useSelector((state) => state.gameSettings);

    const size = 4;
    const [grid, setGrid] = useState([]);

    const renderTileBox = (
        <Stack direction="column" spacing={1}>
            {grid.map((row, rIndex) => {
                return (
                    <Stack direction="row" spacing={1} key={rIndex}>
                        {row.map((cell, cIndex) => {
                            return (
                                <Tile key={`${rIndex}${cIndex}`} value={cell} />
                            );
                        })}
                    </Stack>
                );
            })}
        </Stack>
    );
    useEffect(() => {
        gameSettings?.grid && setGrid(gameSettings?.grid);
    }, [gameSettings]);

    return (
        <Grid
            container
            direction="column"
            sx={{ minHeight: "calc( 100vh - 144px)" }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    m: "auto",
                    backgroundColor: "#607d8b",
                    p: 1,
                }}
                borderRadius={3}
            >
                {renderTileBox}
            </Box>
        </Grid>
    );
};

export default Tiles;
