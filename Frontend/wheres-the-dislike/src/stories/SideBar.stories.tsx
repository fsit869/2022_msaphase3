
import {SideBar} from "../components/SideBar";
export default {

    component: SideBar,
    title: 'Sidebar',
}

// @ts-ignore
const Template = (args) => <SideBar {...args}/>

// @ts-ignore
export const invalidVideo = Template.bind({});
// @ts-ignore
invalidVideo.args = {
};

