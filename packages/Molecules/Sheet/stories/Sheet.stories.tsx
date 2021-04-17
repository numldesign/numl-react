import React from 'react';
import { Button } from '../../../Atoms/Button';
import { Icon } from '../../../Atoms/Icon';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Sheet } from '../index';

export default {
  title: 'Example/Molecules/Sheet',
  component: Sheet,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Sheet {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  fill: 'bg',
  border: '1bw',
  contentHeight: 'min 50x',
  choices: [
    { label: 'Online Store', value: 'online_store' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Google shopping', value: 'google_shopping' },
    { label: 'Facebook Marketing', value: 'facebook_marketing' },
  ],
  onChange: (props) => console.log(props),
  heading: (
    <nu-block size="xl" color="#text-soft">
      Manage sales channels
    </nu-block>
  ),
  footerActions: [
    <Button key="1">Cancel</Button>,
    <Button key="2" special>
      Done
    </Button>,
  ],
  closeAction: (
    <Button padding="0">
      <Icon name="close" />
    </Button>
  ),
};
