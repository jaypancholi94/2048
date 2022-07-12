import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
    const gameSettings = useSelector((state) => state.gameSettings);

    return (
        <Box
            sx={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "80px",
                display: "flex",
                backgroundColor: "background.default",
            }}
            boxShadow={3}
        >
            <Typography variant="h6" sx={{ m: "auto" }} align="center">
                Score: {gameSettings.score}
            </Typography>
        </Box>
    );
};
export default Footer;
