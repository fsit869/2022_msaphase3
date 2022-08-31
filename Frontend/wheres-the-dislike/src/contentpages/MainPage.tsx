import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Button, Grid, Stack} from "@mui/material";
import getVideoInformation from "../api/YoutubeDislikeApi";
import {NewVideo} from "../components/NewVideo";
import BouncingBall from "../components/BouncingBall";
import {TaskComponent} from "../components/notes/TaskComponent";
import {NewNote} from "../components/notes/NewNote";
import NoteInterface from "../api/mynoteapi/NoteInterface";
import {getAllNotes} from "../api/NoteApi";

/**
 * This contains all the content of the main page.
 * @author Frank Situ
 */
function MainPage() {
    const [videoList, setVideoList] = useState<any | any>({})
    const [noteData, setNoteData] = useState<any | any>([])

    useEffect(() => {
        updateNotes()
    }, []);


    /**
     * Add new video component
     * @param videoID
     */
    const addNewComponentToList = (videoID: string) => {
        let newVideo = <VideoComponent videoID={videoID} deleteMethod={deleteComponentInList}></VideoComponent>;
        setVideoList({...videoList, [videoID]: newVideo})
    }

    /**
     * Delete video component
     * @param videoID
     */
    const deleteComponentInList = (videoID: string) => {
        console.log("Deleting");
        const oldVideos = {...videoList};
        delete oldVideos[videoID];
        setVideoList(oldVideos);
    }

    // Display notes
    const updateNotes = () => {
        // Clear note arr
        getAllNotes(setNoteData)
    }

    return (
        <div>
            <Box p={4}/>

            <Box p={5}>
                <Grid container spacing={2} justifyContent="center">
                    {/*Render video compnents*/}
                    {Object.keys(videoList).map(function (key, index) {
                        return <Grid item>
                            {videoList[key]}
                        </Grid>
                    })}

                    <Grid item>
                        <BouncingBall></BouncingBall>
                    </Grid>

                    {/*Grid containing components */}
                    {
                        noteData.map((currentNote: NoteInterface) =>
                            (
                                <Grid item>
                                    <TaskComponent
                                        id={currentNote.id}
                                        title={currentNote.title}
                                        description={currentNote.description}
                                        date={currentNote.date}
                                        severity={currentNote.severity}
                                        updateMethod={updateNotes}
                                    />
                                </Grid>
                            ))
                    }
                </Grid>

            </Box>

            {/* New task FAB */}
            <NewVideo onNewNote={addNewComponentToList}></NewVideo>
            <NewNote updateMethod={updateNotes}></NewNote>


        </div>
    );
}

export default MainPage;