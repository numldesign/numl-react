import React from 'react';
import { Button } from '../../../Atoms/Button';
import { Icon } from '../../../Atoms/Icon';
import { TextInput } from '../../../Atoms/TextInput';
import Root from '../../../Components/Root';
import { Menu } from '../../Menu';
import { Filters } from '../index';

export default {
  title: 'Example/Molecules/Filters',
  component: Filters,
};

const Template = ({ ...args }) => (
  <Root>
    <Filters {...args} />
  </Root>
);

export const Default = Template.bind({});
Default.args = {
  responsive: '601px',
  flow: 'column|row',
  filterSearch: (
    <TextInput placeholder="Text Field" prefix={<Icon name="search-outline" padding="1x" />} />
  ),
  filterGroup: (
    <Button.Group>
      <Button key="one">
        Button
        <Icon name="chevron-down-outline" />
        <nu-popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item value="Action 1" onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Menu.Item>
            <Menu.Item value="Action 2" onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Menu.Item>
          </Menu>
        </nu-popup>
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
        <nu-popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item value="Action 1" onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Menu.Item>
            <Menu.Item value="Action 2" onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Menu.Item>
          </Menu>
        </nu-popup>
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
