import React from 'react';
import Button from '../../Atoms/Button/Button';
import TextInput from '../../Atoms/TextInput/TextInput';
import Root from '../../Components/Root';
import ActionList from './../ActionList/ActionList';
import Popover from './Popover';

export default {
  title: 'Example/Molecules/Popover',
  component: Popover,
};

const Template = ({ ...args }) => (
  <Root>
    <nu-btn width="10" columns="1fr auto" value="Select">
      <nu-value />
      <nu-dropdownicon></nu-dropdownicon>
      <Popover {...args} />
    </nu-btn>
  </Root>
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
