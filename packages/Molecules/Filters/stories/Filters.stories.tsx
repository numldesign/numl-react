import React from 'react';
import { NumlProvider, ThemeProvider, TextInput, Menu, Filters, El } from '@numl-react/core';

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
  filterSearch: <TextInput placeholder="Text Field" prefix={<El.Icon name="search-outline" padding="1x" />} />,
  filterGroup: (
    <El.ButtonGroup>
      <El.Button key="one">
        Button
        <El.Icon name="chevron-down-outline" />
        <El.Popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item value="Action 1" onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Menu.Item>
            <Menu.Item value="Action 2" onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Menu.Item>
          </Menu>
        </El.Popup>
      </El.Button>
      <El.Button key="two">
        Button
        <El.Icon name="chevron-down-outline" />
      </El.Button>
      <El.Button key="three">
        Button
        <El.Icon name="chevron-down-outline" />
      </El.Button>
      <El.Button key="four">More Filters</El.Button>
    </El.ButtonGroup>
  ),
  extra: (
    <El.Button disabled>
      <El.Icon name="star-outline" />
      Saved
    </El.Button>
  ),
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  responsive: '601px',
  flow: 'column|row',
  filterGroup: (
    <El.ButtonGroup>
      <El.Button key="one">
        Button
        <El.Icon name="chevron-down-outline" />
        <El.Popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item value="Action 1" onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Menu.Item>
            <Menu.Item value="Action 2" onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Menu.Item>
          </Menu>
        </El.Popup>
      </El.Button>
      <El.Button key="two">
        Button
        <El.Icon name="chevron-down-outline" />
      </El.Button>
      <El.Button key="three">
        Button
        <El.Icon name="chevron-down-outline" />
      </El.Button>
      <El.Button key="four">More Filters</El.Button>
    </El.ButtonGroup>
  ),
  extra: (
    <El.Button disabled>
      <El.Icon name="star-outline" />
      Saved
    </El.Button>
  ),
};
