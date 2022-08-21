import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    TextField
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";

interface Props {
    onNewNote: any
}

/**
 * FAB to create a new task
 * @param props
 * @constructor
 */
export const NewTask = (props: Props) => {
    const [open, setOpen] = useState(false); // State checking if dialogue open/Closed
    const [ID, setID] = useState(""); // Title var


    // Called if FAB clicked. Handles opening on dialogue
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Handles closing of dialogue
    const handleClose = () => {
        setID("");
        setOpen(false);
    };

    // Handle finish creating new note
    const createNote = () => {
        props.onNewNote(ID);
        handleClose();
    };

    return (
        <div>
            {/* FLOATING ACTION BUTTON */}
            <Fab
                color="primary"
                aria-label="add"
                variant="extended"
                sx={{
                    margin: 0,
                    top: "auto",
                    right: 30,
                    bottom: 30,
                    left: "auto",
                    position: "fixed",
                }}
                onClick={handleClickOpen}
            >
                <AddIcon/>
            </Fab>

            {/* DIALOGUE MENU */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
            >
                <DialogTitle id="form-dialog-title">Add new Video</DialogTitle>

                <DialogContent>
                    {/* Descriptor  */}
                    <DialogContentText>
                        Add the youtube video ID. EG: "QH2-TGUlwu4", "iiZXZt830l0"
                    </DialogContentText>

                    {/* Title textfield */}
                    <Box pb={2}>
                        <TextField
                            required
                            margin="dense"
                            label="ID"
                            type="title"
                            inputProps={{ maxLength: 14 }}
                            variant="outlined"
                            onChange= {(e) => setID(e.target.value)}
                            value={ID}
                            fullWidth
                            rows={1}
                        />
                    </Box>

                </DialogContent>

                {/* Action button centre */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={createNote} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}