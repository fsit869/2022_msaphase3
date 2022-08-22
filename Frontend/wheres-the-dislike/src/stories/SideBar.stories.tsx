
import {SideBar} from "../components/SideBar";
export default {

    component: SideBar,
    title: 'Sidebar',
}

// @ts-ignore
const Template = (args) => <SideBar {...args}/>

// @ts-ignore
export const normal = Template.bind({});
// @ts-ignore
normal.args = {
};

