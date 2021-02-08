import React from 'react';
import RadiobuttonField from '../components/RadiobuttonField';
import Root from '../components/Root';
import Radiobutton from '../components/Radiobutton';

export default {
    title: 'Example/Radiobutton',
    component: Radiobutton,
    argTypes: {
        size: {
            defaultValue: undefined,
            control: {
                type: 'inline-radio',
                options: ['xs', 'sm', 'md', 'lg', 'xl', undefined],
            },
        },
        label: {
            defaultValue: 'Radiobutton',
            control: {
                type: 'text',
            },
        },
        fill: { control: 'color' },
    },
};

const TemplateRadiobutton = ({ label, ...args }) => (
    <Root>
        {label ? <RadiobuttonField
            label={label}
            {...args}
        /> : <Radiobutton
                {...args}
            />}
    </Root>
);

export const Basic = TemplateRadiobutton.bind({});
Basic.args = {
    checked: false,
    label: '',
};

export const WithLabel = TemplateRadiobutton.bind({});
WithLabel.args = {
    checked: false,
    label: 'Radiobutton',
};
