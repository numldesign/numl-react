import React, { useState } from 'react';
import { Icon } from '../../../Atoms/Icon';
import Root from '../../../Components/Root';
import { Menu } from '../index';

export default {
  title: 'Example/Molecules/Menu',
  component: Menu,
};

export const Default = (args) => {
  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
  };

  return (
    <Root>
      <Menu {...args} border radius size="sm">
        <Menu.Item value="undo" onClick={handleMenuClick}>
          Undo
        </Menu.Item>
        <Menu.Item border="bottom" value="redo" onClick={handleMenuClick}>
          Redo
        </Menu.Item>
        <Menu.Item value="cut" onClick={handleMenuClick}>
          Cut
        </Menu.Item>
        <Menu.Item value="copy" onClick={handleMenuClick}>
          Copy
        </Menu.Item>
        <Menu.Item value="paste" onClick={handleMenuClick}>
          Paste
        </Menu.Item>
      </Menu>
    </Root>
  );
};

export const WithIcons = (args) => {
  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
  };

  return (
    <Root>
      <Menu {...args} border radius size="sm">
        <Menu.Item value="Preview" columns="auto 1fr" onClick={handleMenuClick}>
          <Icon name="eye-outline" />
          Preview
        </Menu.Item>
        <Menu.Item value="Share" columns="auto 1fr" onClick={handleMenuClick}>
          <Icon name="share-social-outline" />
          Share
        </Menu.Item>
        <Menu.Item
          value="Getlink"
          border="bottom"
          columns="auto 1fr"
          onClick={handleMenuClick}
        >
          <Icon name="link-outline" />
          Get link
        </Menu.Item>
        <Menu.Item value="Copy" columns="auto 1fr" onClick={handleMenuClick}>
          <Icon name="copy-outline" />
          Copy
        </Menu.Item>
        <Menu.Item
          value="Download"
          columns="auto 1fr"
          onClick={handleMenuClick}
        >
          <Icon name="download-outline" />
          Download
        </Menu.Item>
      </Menu>
    </Root>
  );
};

export const WithHotKeyAndPopup = (args) => {
  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
  };

  return (
    <Root>
      <Menu {...args} border radius size="sm">
        <Menu.Item
          value="Cut"
          columns="auto 1fr auto"
          use-hotkey="X" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
        >
          <Icon name="cut-outline" />
          Cut
          <nu-el>
            <Icon name="logo-windows" />X
          </nu-el>
        </Menu.Item>
        <Menu.Item
          value="Copy"
          columns="auto 1fr auto"
          use-hotkey="C" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
        >
          <Icon name="copy-outline" />
          Copy
          <nu-el>
            <Icon name="logo-windows" />C
          </nu-el>
        </Menu.Item>
        <Menu.Item
          border="bottom"
          value="Paste"
          columns="auto 1fr auto"
          use-hotkey="P" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
        >
          <Icon name="clipboard-outline" />
          Paste
          <nu-el>
            <Icon name="logo-windows" />P
          </nu-el>
        </Menu.Item>
        <Menu.Item value="Webclipboard" columns="auto 1fr auto">
          <Icon name="cloudy-outline" />
          Web clipboard
          <nu-dropdownicon width="6x" />
          <nu-popup use-menu display="flex" padding="1x 0" flow="column">
            <Menu.Item value="Label1" onClick={handleMenuClick}>
              Label 1
            </Menu.Item>
            <Menu.Item value="Label2" onClick={handleMenuClick}>
              Label 2
            </Menu.Item>
            <Menu.Item value="Label3" onClick={handleMenuClick}>
              Label 3
            </Menu.Item>
          </nu-popup>
        </Menu.Item>
      </Menu>
    </Root>
  );
};

export const WithSelectableItems = (args) => {
  const [selected, setSelected] = useState('');

  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
    setSelected(evt.target.value);
  };

  return (
    <Root>
      <Menu {...args} border radius size="sm">
        <Menu.Item
          value="Single"
          columns="auto 1fr"
          use-hotkey="X" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
          color={selected === 'Single' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <Icon
            name="checkmark-outline"
            opacity={selected === 'Single' ? '1' : '0'}
            transition="opacity .1s"
          />
          Single
        </Menu.Item>
        <Menu.Item
          value="1.15"
          columns="auto 1fr"
          use-hotkey="X" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
          color={selected === '1.15' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <Icon
            name="checkmark-outline"
            opacity={selected === '1.15' ? '1' : '0'}
            transition="opacity .1s"
          />
          1.15
        </Menu.Item>
        <Menu.Item
          value="Default"
          columns="auto 1fr"
          use-hotkey="X" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
          color={selected === 'Default' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <Icon
            name="checkmark-outline"
            opacity={selected === 'Default' ? 1 : 0}
            transition="opacity .1s"
          />
          Default
        </Menu.Item>
        <Menu.Item
          value="Custom:_1.2"
          columns="auto 1fr"
          use-hotkey="X" // hotkey link with to property
          to={handleMenuClick}
          onClick={handleMenuClick}
          border="bottom"
          color={selected === 'Custom:_1.2' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <Icon
            name="checkmark-outline"
            opacity={selected === 'Custom:_1.2' ? 1 : 0}
            transition="opacity .1s"
          />
          Custom: 1.2
        </Menu.Item>
        <Menu.Item value="add_space_before" columns="1fr auto">
          Add space before paragraph
          <nu-dropdownicon width="6x" />
          <nu-popup use-menu display="flex" padding="1x 0" flow="column">
            <Menu.Item value="Label1" onClick={handleMenuClick}>
              Label 1
            </Menu.Item>
            <Menu.Item value="Label2" onClick={handleMenuClick}>
              Label 2
            </Menu.Item>
            <Menu.Item value="Label3" onClick={handleMenuClick}>
              Label 3
            </Menu.Item>
          </nu-popup>
        </Menu.Item>
        <Menu.Item value="add_space_before" onClick={handleMenuClick}>
          Add space after paragraph
        </Menu.Item>
        <Menu.Item value="custom_spacing" onClick={handleMenuClick}>
          Custom spacing..
        </Menu.Item>
      </Menu>
    </Root>
  );
};
