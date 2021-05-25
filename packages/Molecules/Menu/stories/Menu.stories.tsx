import React, { useState } from 'react';
import { El, NumlProvider, ThemeProvider } from '@numl-react/core';
import Menu from '../src/Menu';

export default {
  title: 'Example/Molecules/Menu',
  component: Menu,
};

export const Default = (args) => {
  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
  };

  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />
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
    </NumlProvider>
  );
};

export const WithIcons = (args) => {
  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
  };

  return (
    <NumlProvider>
      <Menu {...args} border radius size="sm">
        <ThemeProvider hue="290" saturation="75" />
        <ThemeProvider name="secondary" hue="240" saturation="75" />

        <Menu.Item value="Preview" columns="auto 1fr" onClick={handleMenuClick}>
          <El.Icon name="eye-outline" />
          Preview
        </Menu.Item>
        <Menu.Item value="Share" columns="auto 1fr" onClick={handleMenuClick}>
          <El.Icon name="share-social-outline" />
          Share
        </Menu.Item>
        <Menu.Item
          value="Getlink"
          border="bottom"
          columns="auto 1fr"
          onClick={handleMenuClick}
        >
          <El.Icon name="link-outline" />
          Get link
        </Menu.Item>
        <Menu.Item value="Copy" columns="auto 1fr" onClick={handleMenuClick}>
          <El.Icon name="copy-outline" />
          Copy
        </Menu.Item>
        <Menu.Item
          value="Download"
          columns="auto 1fr"
          onClick={handleMenuClick}
        >
          <El.Icon name="download-outline" />
          Download
        </Menu.Item>
      </Menu>
    </NumlProvider>
  );
};

export const WithHotKeyAndPopup = (args) => {
  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
  };

  return (
    <NumlProvider>
      <Menu {...args} border radius size="sm">
        <ThemeProvider hue="290" saturation="75" />
        <ThemeProvider name="secondary" hue="240" saturation="75" />

        <Menu.Item
          value="Cut"
          columns="auto 1fr auto"
          use-hotkey="X" // hotkey link with to property
          onClick={handleMenuClick}
        >
          <El.Icon name="cut-outline" />
          Cut
          <El.BaseElement>
            <El.Icon name="logo-windows" />
          </El.BaseElement>
        </Menu.Item>
        <Menu.Item
          value="Copy"
          columns="auto 1fr auto"
          use-hotkey="C" // hotkey link with to property
          onClick={handleMenuClick}
        >
          <El.Icon name="copy-outline" />
          Copy
          <El.BaseElement>
            <El.Icon name="logo-windows" />C
          </El.BaseElement>
        </Menu.Item>
        <Menu.Item
          border="bottom"
          value="Paste"
          columns="auto 1fr auto"
          use-hotkey="P" // hotkey link with to property
          onClick={handleMenuClick}
        >
          <El.Icon name="clipboard-outline" />
          Paste
          <El.BaseElement>
            <El.Icon name="logo-windows" />P
          </El.BaseElement>
        </Menu.Item>
        <Menu.Item value="Webclipboard" columns="auto 1fr auto">
          <El.Icon name="cloudy-outline" />
          Web clipboard
          <El.DropdownIcon width="6x" />
          <El.Popup use-menu display="flex" padding="1x 0" flow="column">
            <Menu.Item value="Label1" onClick={handleMenuClick}>
              Label 1
            </Menu.Item>
            <Menu.Item value="Label2" onClick={handleMenuClick}>
              Label 2
            </Menu.Item>
            <Menu.Item value="Label3" onClick={handleMenuClick}>
              Label 3
            </Menu.Item>
          </El.Popup>
        </Menu.Item>
      </Menu>
    </NumlProvider>
  );
};

export const WithSelectableItems = (args) => {
  const [selected, setSelected] = useState('');

  const handleMenuClick = (evt) => {
    console.log('selected menu -> ', evt.target.value);
    setSelected(evt.target.value);
  };

  return (
    <NumlProvider>
      <Menu {...args} border radius size="sm">
        <ThemeProvider hue="290" saturation="75" />
        <ThemeProvider name="secondary" hue="240" saturation="75" />

        <Menu.Item
          value="Single"
          columns="auto 1fr"
          use-hotkey="X" // hotkey link with to property
          onClick={handleMenuClick}
          color={selected === 'Single' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <El.Icon
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
          onClick={handleMenuClick}
          color={selected === '1.15' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <El.Icon
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
          onClick={handleMenuClick}
          color={selected === 'Default' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <El.Icon
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
          onClick={handleMenuClick}
          border="bottom"
          color={selected === 'Custom:_1.2' ? '#text' : '#text-strong'}
          transition="color .1s"
        >
          <El.Icon
            name="checkmark-outline"
            opacity={selected === 'Custom:_1.2' ? 1 : 0}
            transition="opacity .1s"
          />
          Custom: 1.2
        </Menu.Item>
        <Menu.Item value="add_space_before" columns="1fr auto">
          Add space before paragraph
          <El.DropdownIcon width="6x" />
          <El.Popup use-menu display="flex" padding="1x 0" flow="column">
            <Menu.Item value="Label1" onClick={handleMenuClick}>
              Label 1
            </Menu.Item>
            <Menu.Item value="Label2" onClick={handleMenuClick}>
              Label 2
            </Menu.Item>
            <Menu.Item value="Label3" onClick={handleMenuClick}>
              Label 3
            </Menu.Item>
          </El.Popup>
        </Menu.Item>
        <Menu.Item value="add_space_before" onClick={handleMenuClick}>
          Add space after paragraph
        </Menu.Item>
        <Menu.Item value="custom_spacing" onClick={handleMenuClick}>
          Custom spacing..
        </Menu.Item>
      </Menu>
    </NumlProvider>
  );
};
