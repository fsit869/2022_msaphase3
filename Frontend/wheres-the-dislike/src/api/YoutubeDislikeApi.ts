
import axios from 'axios';

export type VideoKeys = {
    id: number;
    dateCreated: string;
    likes: number;
    dislikes: number;
    viewCount: number;
    deleted: boolean;
};

/**
 * Fetch from external API like/dislike data about video
 * @param videoURL
 * @param setData
 * @param setLoading
 * @param setError
 */
export default function getVideoInformation(videoURL: string, setData: React.Dispatch<any>, setLoading:  React.Dispatch<React.SetStateAction<boolean>>, setError: React.Dispatch<React.SetStateAction<boolean>>) {
    axios.get<VideoKeys>('https://returnyoutubedislikeapi.com/votes?videoId=' + videoURL).then((res) => {
        // Successful fetch
        console.log(res)
        setData(res.data);
        setLoading(false);
        setError(false);
    }).catch((error) => {
        // Failed fetch
        console.log(error);
        setLoading(false);
        setError(true);
    })
}