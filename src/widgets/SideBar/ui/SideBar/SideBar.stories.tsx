import React from 'react';
import { ComponentMeta, ComponentStory} from '@storybook/react';
import { SideBar} from './SideBar';
import "app/styles/index.scss"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'widget/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {

};
export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)]