import React from 'react';
import { Button } from '../../../Atoms/Button';
import { TextInput } from '../../../Atoms/TextInput';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { ActionList } from '../../ActionList';
import { Popover } from '../index';

export default {
  title: 'Example/Molecules/Popover',
  component: Popover,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <nu-btn width="10" columns="1fr auto" value="Select">
      <nu-value />
      <nu-dropdownicon></nu-dropdownicon>
      <Popover {...args} />
    </nu-btn>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  padding: '0',
  children: (
    <ActionList header="Availables sales channel" border="n">
      <ActionList.Item key="1" onClick={(e) => console.log('clicked ', e)}>
        Online Store
      </ActionList.Item>
      <ActionList.Item key="2" onClick={(e) => console.log('clicked ', e)}>
        Facebook
      </ActionList.Item>
      <ActionList.Item key="3" onClick={(e) => console.log('clicked ', e)}>
        Forneu POS
      </ActionList.Item>
    </ActionList>
  ),
};

export const WithForm = Template.bind({});
WithForm.args = {
  children: (
    <nu-flex gap="2x" flow="column" width="max-content" padding="1x">
      <TextInput.Field label="Show all customers where:" placeholder="Today" />
      <TextInput.Field label="Tags" value="Jaded Pixel" />
      <Button width="min-content">Add Filter</Button>
    </nu-flex>
  ),
};
