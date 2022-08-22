import {VideoComponent} from "../components/VideoComponent";


export default {

    component: VideoComponent,
    title: 'Video Component',
}

// @ts-ignore
const Template = (args) => <VideoComponent {...args}/>



// @ts-ignore
export const invalidVideo = Template.bind({});
// @ts-ignore
invalidVideo.args = {
    videoID: "Not exists",
};

export const videoOne = Template.bind({});
// @ts-ignore
videoOne.args = {
    videoID: "QH2-TGUlwu4",
};
