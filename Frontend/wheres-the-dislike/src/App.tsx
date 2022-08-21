import React from 'react';
import MainPage from "./contentpages/MainPage";
import Header from "./components/Header";
import getVideoInformation from "./api/YoutubeDislikeApi";

function App() {
    return (
        <div>
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
