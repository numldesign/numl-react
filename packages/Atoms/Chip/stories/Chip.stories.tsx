import React from 'react';
import { NumlProvider, ThemeProvider, Icon, Chip } from '../../../entry';

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
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
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
    </NumlProvider>
  );
};

const Template2 = function ({ children, ...args }) {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
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
    </NumlProvider>
  );
};
const Template3 = function ({ children, ...args }) {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
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
    </NumlProvider>
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
