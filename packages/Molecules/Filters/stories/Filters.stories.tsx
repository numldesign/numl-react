import React from 'react';
import { NumlProvider, ThemeProvider, TextInput, Icon, Button, Menu, Filters, Popup } from '../../../entry';

export default {
  title: 'Example/Molecules/Filters',
  component: Filters,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Filters {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  responsive: '601px',
  flow: 'column|row',
  filterSearch: <TextInput placeholder="Text Field" prefix={<Icon name="search-outline" padding="1x" />} />,
  filterGroup: (
    <Button.Group>
      <Button key="one">
        Button
        <Icon name="chevron-down-outline" />
        <Popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item value="Action 1" onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Menu.Item>
            <Menu.Item value="Action 2" onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Menu.Item>
          </Menu>
        </Popup>
      </Button>
      <Button key="two">
        Button
        <Icon name="chevron-down-outline" />
      </Button>
      <Button key="three">
        Button
        <Icon name="chevron-down-outline" />
      </Button>
      <Button key="four">More Filters</Button>
    </Button.Group>
  ),
  extra: (
    <Button disabled>
      <Icon name="star-outline" />
      Saved
    </Button>
  ),
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  responsive: '601px',
  flow: 'column|row',
  filterGroup: (
    <Button.Group>
      <Button key="one">
        Button
        <Icon name="chevron-down-outline" />
        <Popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item value="Action 1" onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Menu.Item>
            <Menu.Item value="Action 2" onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Menu.Item>
          </Menu>
        </Popup>
      </Button>
      <Button key="two">
        Button
        <Icon name="chevron-down-outline" />
      </Button>
      <Button key="three">
        Button
        <Icon name="chevron-down-outline" />
      </Button>
      <Button key="four">More Filters</Button>
    </Button.Group>
  ),
  extra: (
    <Button disabled>
      <Icon name="star-outline" />
      Saved
    </Button>
  ),
};
