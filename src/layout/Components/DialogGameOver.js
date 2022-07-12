import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

import { RESTART } from "store/actions";
export default function DialogGameOver() {
    const gameSettings = useSelector((state) => state.gameSettings);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: RESTART });
    };

    return (
        <div>
            <Dialog
                open={gameSettings.gameOver}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xs"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">{"GAME OVER"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Score: {gameSettings.score}
                    </DialogContentText>
                </DialogContent>
                <DialogActions align="center">
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        autoFocus
                        align="center"
                        startIcon={<ReplayIcon />}
                    >
                        Restart
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
