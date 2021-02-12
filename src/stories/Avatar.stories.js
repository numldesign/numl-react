import React from 'react';
import Root from '../components/Root';
import Avatar from '../components/Avatar';

export default {
    title: 'Example/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            defaultValue: undefined,
            control: {
                type: 'inline-radio',
                options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
            },
        },
        theme: {
            defaultValue: 'special',
            control: {
                type: 'select',
                options: ['special', 'success', 'warning', 'danger']
            }
        },
        showArrow: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
    },
};

const Template = ({ ...args }) => (
    <Root>
        {<Avatar {...args} />}
    </Root>
);

const Template1 = ({ ...args }) => (
    <Root>
        {<Avatar.Profile {...args} />}
    </Root>
);

export const Basic = Template.bind({});
Basic.args = {
    username: '',
};

export const WithLabel = Template1.bind({});
WithLabel.args = {
    username: 'Van Gough',
    subtitle: 'subtitle'
};

