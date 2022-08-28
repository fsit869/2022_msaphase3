
import EventNoteIcon from '@mui/icons-material/EventNote';
import {
    Box, Button,
    createStyles,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab, FormControl, InputLabel,
    makeStyles, MenuItem, Select, TextField,
    Theme
} from "@mui/material";
import React from "react";
import {saveNewNote} from "../../api/NoteApi";



// No props taken
interface Props {
}

/**
 * Creates a FAB which opens a dialogue for creating a new note
 * @param props None
 */
export const NewNote: React.FC<Props> = (props: Props) => {
    const [open, setOpen] = React.useState(false); // State checking if dialogue open/Closed

    const [severity, setSeverity] = React.useState(0); // Prority state
    const [title, setTitle] = React.useState(""); // Title var
    const [comments, setComments] = React.useState(""); // Comment var

    const [charCounter, setCharCounter] = React.useState(0); // Total characters in comment
    const [commentError, setCommentError] = React.useState(false) // Set error
    const [helperText, setHelperText] = React.useState(charCounter+"/100") // Comment helper txt


    // Mutation new note
    // const [newNote, { data, loading, error }] = useMutation(NEW_NOTE);

    // Called if FAB clicked. Handles opening on dialogue
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Handles closing of dialogue
    const handleClose = () => {
        setComments("");
        setTitle("");
        setOpen(false);
        setCharCounter(0)
        setCommentError(false)
    };

    // Handle finish creating new note
    const createNote = () => {
        if (commentError || title.length===0) {
            // Reject creating new note if error
        } else {
            // Send mutation for new note
            saveNewNote(title, comments, new Date().toISOString().slice(0, 10), severity)
            handleClose();
        }

    };

    // Handles limit on comment and error status
    const onCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let charLength:number = event.target.value.length

        if (charLength>120) {
            setComments(event.target.value)
            setCommentError(true);
            setHelperText("Max characters reached!")
        } else{
            setComments(event.target.value)
            setCharCounter(charLength);
            setCommentError(false);
            setHelperText(event.target.value.length + "/120")
        }
    }

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
                <EventNoteIcon/>
            </Fab>

            {/* DIALOGUE MENU */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
            >
                <DialogTitle id="form-dialog-title">Create new task</DialogTitle>

                <DialogContent>
                    {/* Descriptor  */}
                    <DialogContentText>
                        Fill in details to create a new task.
                    </DialogContentText>

                    {/* Title textfield */}
                    <Box pb={2}>
                        <TextField
                            required
                            margin="dense"
                            label="Title"
                            type="title"
                            inputProps={{ maxLength: 14 }}
                            variant="outlined"
                            onChange= {(e) => setTitle(e.target.value)}
                            value={title}
                            fullWidth
                            rows={1}
                        />
                    </Box>

                    {/* Comments textfield */}
                    <Box pb={2}>
                        <TextField
                            label="Comments"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={comments}
                            onChange={(e) => onCommentChange(e)}
                            error={commentError}
                            helperText={helperText}
                            fullWidth
                        />
                    </Box>

                    {/* Priority switch */}
                    <FormControl  fullWidth={true}>
                        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={severity}
                            onChange={(e)=>setSeverity(e.target.value as number)}
                        >
                            <MenuItem value={3}>Severe</MenuItem>
                            <MenuItem value={2}>Medium</MenuItem>
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={0}>None</MenuItem>
                        </Select>
                    </FormControl>
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
