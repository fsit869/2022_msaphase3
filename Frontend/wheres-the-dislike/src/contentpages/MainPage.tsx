import React, {useState} from "react";
import Header from "../components/Header";
import {VideoComponent} from "../components/VideoComponent";
import {Box, Button, Grid, Stack} from "@mui/material";
import getVideoInformation from "../api/YoutubeDislikeApi";
import {NewVideo} from "../components/NewVideo";
import BouncingBall from "../components/BouncingBall";
import {TaskComponent} from "../components/notes/TaskComponent";
import {NewNote} from "../components/notes/NewNote";

/**
 * This contains all the content of the main page.
 * @author Frank Situ
 */
function MainPage() {
    const [videoList, setVideoList] = useState<any | any>({})

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

    return (
        <div>
            <Box p={4}/>

            <Grid container spacing={2} justifyContent="center" >
                {/*Render video compnents*/}
                {Object.keys(videoList).map(function(key, index) {
                    return <Grid item>
                        {videoList[key]}
                    </Grid>
                })}

                <Grid item>
                    <BouncingBall></BouncingBall>
                </Grid>

                <Grid item>
                    <TaskComponent severity={1} date={"10/20"} description={"Hello"} id={"re"} title={"ttie"}/>
                </Grid>

                <NewVideo onNewNote={addNewComponentToList}></NewVideo>
            </Grid>
            {/* New task FAB */}


            <NewNote></NewNote>


        </div>
    );
}

export default MainPage;