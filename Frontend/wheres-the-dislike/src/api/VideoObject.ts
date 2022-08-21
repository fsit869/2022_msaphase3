/**
 * ADT. Represents all data of a video
 */
export default class VideoObject {

    public videoID: string;
    public dateReleased: string;
    public likes: number;
    public dislikes: number;
    public views: number;

    constructor(videoID: string, dateReleased: string, likes: number, dislikes: number, views: number) {
        this.videoID = videoID;
        this.dateReleased = dateReleased;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
    }

}