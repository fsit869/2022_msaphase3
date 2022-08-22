
import BouncingBall from "../components/BouncingBall";
export default {

    component: BouncingBall,
    title: 'Ball',
}

// @ts-ignore
const Template = (args) => <BouncingBall {...args}/>

// @ts-ignore
export const ball = Template.bind({});
// @ts-ignore
ball.args = {
};

