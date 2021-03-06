import * as El from '@numl-react/elements';
import React from 'react';
import Button from '../../../Atoms/Button/src/Button';
import TextInput from '../../../Atoms/TextInput/src/TextInput';
import Menu from '../../Menu/src/Menu';
import Filters from '../src/Filters';

export default {
  title: 'Numl React/Molecules/Filters',
  component: Filters,
};

const Template = ({ ...args }) => (
  <>
    <Filters {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  filterSearch: (
    <TextInput
      height="100%"
      width="min 15"
      placeholder="Text Field"
      icon="search-outline"
    />
  ),
  filterGroup: (
    <El.ButtonGroup outline="n">
      <Button
        outline="n"
        menu={
          <>
            <Button.Item onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Button.Item>
            <Button.Item onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Button.Item>
          </>
        }
      >
        Button
      </Button>
      <Button
        menu={
          <>
            <Button.Item onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Button.Item>
            <Button.Item onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Button.Item>
          </>
        }
      >
        Button
      </Button>
      <Button
        menu={
          <>
            <Button.Item onClick={(evt) => console.log(evt.target.value)}>
              Action 1
            </Button.Item>
            <Button.Item onClick={(evt) => console.log(evt.target.value)}>
              Action 2
            </Button.Item>
          </>
        }
      >
        Button
      </Button>
      <Button key="four">More Filters</Button>
    </El.ButtonGroup>
  ),
  extra: (
    <Button icon="star-outline" disabled>
      Saved
    </Button>
  ),
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  filterGroup: (
    <El.ButtonGroup>
      <El.Button key="one">
        Button
        <El.Icon name="chevron-down-outline" />
        <El.Popup use-menu display="flex" padding="1x 0" flow="column">
          <Menu size="sm">
            <Menu.Item
              value="Action 1"
              onClick={(evt) => console.log(evt.target.value)}
            >
              Action 1
            </Menu.Item>
            <Menu.Item
              value="Action 2"
              onClick={(evt) => console.log(evt.target.value)}
            >
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
