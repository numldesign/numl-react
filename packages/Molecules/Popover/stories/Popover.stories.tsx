import React, { Children } from 'react';
import {
  ActionList,
  El,
  NumlProvider,
  TextInput,
  ThemeProvider,
} from '@numl-react/core';
import Popover from '../../../Molecules/Popover/src/Popover';
import Button from '../../../Atoms/Button/src/Button';

export default {
  title: 'Example/Molecules/Popover',
  component: Popover,
};

const Template = ({ children }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button width="10" columns="1fr auto" value="Select" menu={'jfs'}>
      Click Me!
      <Popover>{children}</Popover>
    </Button>
  </El.NumlProvider>
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
