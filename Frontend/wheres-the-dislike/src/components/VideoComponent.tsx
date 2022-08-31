import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    CardHeader,
    Container,
    IconButton,
    Typography, Grid
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VideoObject from "../api/VideoObject";
import React, {useEffect, useState} from "react";
import getVideoInformation from "../api/YoutubeDislikeApi";
import {wait} from "@testing-library/user-event/dist/utils";

/**
 * VideoID: Youtube video ID
 * DeleteMethod: Method called to delete this component
 */
interface Props {
    videoID: string,
    deleteMethod: any
}

/**
 * Represents a video component
 * @param props
 * @constructor
 */
export const VideoComponent = (props: Props) => {
    // Store note settings
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [videoDetails, setVideoDetails] = useState<undefined | any>(undefined);

    // Fetch dislike data
    useEffect(() => {
        // Update the document title using the browser API
        getVideoInformation(props.videoID, setVideoDetails, setLoading, setError);
    }, []);

    // If error
    if (loading) return <p>Loading</p>


    // Video card
    return <Card sx={{
        maxWidth: 300,
        maxHeight: 300,
        minWidth: 300,
        minHeight: 300,
    }}>
        {/*Header*/}
        <CardHeader
            title={"VidID: " + props.videoID}
            sx={{
                backgroundColor: "lightyellow",
                textAlign: "left",
            }}>

        </CardHeader>

        {/*Video*/}
        <CardContent sx={{
            backgroundColor: "lightyellow",
        }}>
            <iframe
                src={"https://www.youtube.com/embed/" + props.videoID}
                width={260}
                height={120}

                allowFullScreen={true}
            />

            {/*Dislike data*/}
            {error ? <p>Video could not be found</p> : <div>
                <Typography variant="body2" align="left" component="p">
                    <b>Likes:</b> {videoDetails.likes}    <b>Dislikes:</b> {videoDetails.dislikes}
                </Typography>
                <Typography variant="body2" align="left" component="p">
                    <b>Rating:</b> {videoDetails.rating.toString().substring(0, 3)} / 5
                </Typography>
            </div>}

            {/* Delete button */}
            <IconButton aria-label="Delete Task" onClick={() =>
                props.deleteMethod(props.videoID)
            }>
                <DeleteIcon></DeleteIcon>
            </IconButton>
        </CardContent>

        {/* Action area */}
        <CardActions
            sx={{
                backgroundColor: "lightyellow",
                textAlign: "right",
            }}
        >





        </CardActions>
    </Card>;
}