import { ActionList, Button, El, Popover, TextInput } from '@numl-react/core';
import React from 'react';

export default {
  title: 'Numl React/Molecules/Popover',
  component: Popover,
};

const Template = ({ children }) => (
  <>
    <Button width="10" columns="1fr auto" value="Select" menu={'jfs'}>
      Click Me!
      <Popover>{children}</Popover>
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
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
    <El.Flex gap="2x" flow="column" width="max-content" padding="1x">
      <TextInput label="Show all customers where:" placeholder="Today" />
      <TextInput label="Tags" value="Jaded Pixel" />
      <Button width="min-content">Add Filter</Button>
    </El.Flex>
  ),
};
