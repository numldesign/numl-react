import React from 'react';
import Root from '../../../Elements/Root';
import { Icon } from '../../Icon';
import Chip from '../src/Chip';

export default {
  title: 'Example/Atoms/Chip',
  component: Chip,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    theme: {
      defaultValue: undefined,
      control: {
        type: 'select',
        options: [undefined, 'special', 'success', 'warning', 'danger'],
      },
    },
  },
};

const Template = function ({ ...args }) {
  return (
    <Root fill="subtle">
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <Chip use-hover mark="hover" {...args}>
        {' '}
      </Chip>
      <Chip use-hover mark="hover" use-focus outline="focus" {...args}>
        {' '}
      </Chip>
      <Chip use-hover mark="hover" use-active inset="n :active[y]" {...args}>
        {' '}
      </Chip>
      <Chip
        use-hover
        mark="hover"
        use-active
        inset="n :active[y]"
        use-focus
        outline="focus"
        {...args}
      >
        {' '}
      </Chip>
    </Root>
  );
};

const Template2 = function ({ children, ...args }) {
  return (
    <Root fill="subtle">
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <Chip use-hover mark="hover" {...args}>
        {children}
      </Chip>
      <Chip use-hover mark="hover" use-focus outline="focus" {...args}>
        {children}
      </Chip>
      <Chip use-hover mark="hover" use-active inset="n :active[y]" {...args}>
        {children}
      </Chip>
      <Chip
        use-hover
        mark="hover"
        use-active
        inset="n :active[y]"
        use-focus
        outline="focus"
        {...args}
      >
        {children}
      </Chip>
    </Root>
  );
};
const Template3 = function ({ children, ...args }) {
  return (
    <Root fill="subtle">
      <nu-theme hue="290" saturation="75"></nu-theme>
      <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
      <Chip
        use-hover
        mark="hover"
        {...args}
        actionIcon={<Icon name="close-circle-outline" size="1"></Icon>}
      >
        {children}
      </Chip>
      <Chip
        use-hover
        mark="hover"
        use-focus
        outline="focus"
        {...args}
        actionIcon={<Icon name="close-circle-outline" size="1"></Icon>}
      >
        {children}
      </Chip>
      <Chip
        use-hover
        mark="hover"
        use-active
        inset="n :active[y]"
        {...args}
        actionIcon={<Icon name="close-circle-outline" size="1"></Icon>}
      >
        {children}
      </Chip>
      <Chip
        use-hover
        mark="hover"
        use-active
        inset="n :active[y]"
        use-focus
        outline="focus"
        {...args}
        actionIcon={<Icon name="close-circle-outline" size="1"></Icon>}
      >
        {children}
      </Chip>
    </Root>
  );
};
export const Default: any = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon: any = Template2.bind({});
WithIcon.args = {
  children: 'Neutral',
  icon: 'information-circle-outline',
};

export const WithIconAndAction: any = Template3.bind({});
WithIconAndAction.args = {
  children: 'Neutral',
  icon: <Icon name="information-circle-outline"></Icon>,
};
