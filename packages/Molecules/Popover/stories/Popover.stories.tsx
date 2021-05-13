import React from 'react';
import {
  ActionList,
  Button,
  El,
  NumlProvider,
  Popover,
  TextInput,
  ThemeProvider,
} from '@numl-react/core';

export default {
  title: 'Example/Molecules/Popover',
  component: Popover,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button width="10" columns="1fr auto" value="Select">
      <El.Value />
      <El.DropdownIcon />
      <Popover {...args} />
    </Button>
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
    <El.Flex gap="2x" flow="column" width="max-content" padding="1x">
      <TextInput.Field label="Show all customers where:" placeholder="Today" />
      <TextInput.Field label="Tags" value="Jaded Pixel" />
      <Button width="min-content">Add Filter</Button>
    </El.Flex>
  ),
};
