import DeleteIcon from '@mui/icons-material/Delete';
import {Card, CardActions, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import {useState} from "react";
import NoteInterface from "../../api/mynoteapi/NoteInterface";
import {deleteNote} from "../../api/NoteApi";


// Set severity colours
function getServerityColours(severity: number): string {
    if (severity === 0) {
        return "#fff9c4";
    } else if (severity === 1) {
        return "lightgreen";
    } else if (severity === 2) {
        return "orange";
    } else if (severity === 3) {
        return "#f2594d";
    } else {
        return "yellow";
    }
}

// Set serverity texts
function getServerityText(severity: number): string {
    if (severity === 0) {
        return "Unranked";
    } else if (severity === 1) {
        return "Low priority";
    } else if (severity === 2) {
        return "Medium priority";
    } else if (severity === 3) {
        return "High priority";
    } else {
        return "ERR HANDLING PRIORITY";
    }
}

/**
 * Creates a new task
 * @param props: NoteInterface props
 * @constructor
 */
export const TaskComponent: React.FC<NoteInterface> = (props: NoteInterface) => {
    const [rendered, setRendered] = useState(true); // State determining if component is rendered.

    // const [newNote, { data, loading, error }] = useMutation(DELETE_NOTE); // Delete mutation

    // Handle delete requests
    const handleDelete = () => {
        deleteNote(props.id, props.updateMethod)
    };

    return (
        <Card sx={{
            maxWidth: 300,
            minWidth: 300,
            maxHeight: 300,
            minHeight: 300,
        }}>
            {/* Title */}
            <CardHeader
                title={props.title}
                subheader={"Date Created: " + props.date}
                subheaderTypographyProps={{variant: "subtitle2"}}
                sx={{
                    maxHeight: 80,
                    backgroundColor: "lightyellow",
                    paddingTop: 5,
                    textAlign: "left",
                }}
                data-testid="headerElement"
            />

            {/* Comments */}
            <CardContent sx={{
                paddingTop: 0,
                minHeight: "160px",
                backgroundColor: "lightyellow",
            }}>
                <Typography variant="body2" component="p" data-testid="descriptionElement">
                    {props.description}
                </Typography>
            </CardContent>

            {/* Action area */}
            <CardActions sx={{
                paddingTop: 2,
                backgroundColor: getServerityColours(props.severity)
            }}>

                {/* Delete button */}
                <IconButton aria-label="Delete Task" onClick={handleDelete}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>

                {/* Serverity text */}
                <Typography variant="body2" align="left" component="p" data-testid="severityText">
                    {getServerityText(props.severity)}
                </Typography>
            </CardActions>
        </Card>
    );
};
