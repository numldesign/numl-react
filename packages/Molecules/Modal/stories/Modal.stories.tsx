import * as React from 'react';
import { El, Molecules, ModalHeader, ModalBody, ModalFooter } from '../../../entry';
import { isRefernceNull } from '../../../Utilities';
import Modal from '../src/Modal';

export default {
  title: 'Example/Molecules/Modal',
  component: Modal,
};

const Template = function ({ ...args }) {
  const [show, setShow] = React.useState('no');

  const toggleShow = React.useCallback(() => {
    setShow((tempShow) => (tempShow == 'yes' ? 'no' : 'yes'));
  }, [setShow]);

  React.useEffect(() => {}, [toggleShow]);

  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
      <Modal {...args} onCloseAction={toggleShow} show={show} />
      <El.Button onTap={toggleShow}>Click Me</El.Button>
    </El.NumlProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  heading: 'Reach more shoppers with Instagram product tags',
  body: (
    <El.Block size="md" color="#text-soft">
      This will reset your device to its default factor settings
    </El.Block>
  ),
  footerContent: {
    primary: {
      text: 'Save',
      onTap: function () {
        console.log('Primary Button is tapped');
      },
    },
    secondary: {
      text: 'Close',
    },
  },
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  heading: 'Reach more shoppers with Instagram product tags',
  body: (
    <El.Block size="md" color="#text-soft">
      This will reset your device to its default factor settings
    </El.Block>
  ),
  footerContent: [
    <El.Button
      key="1"
      onTap={() => {
        console.log('This is custom Close Button');
      }}
    >
      Close
    </El.Button>,
    <El.Button
      key="2"
      special
      onTap={() => {
        console.log('This is custom Save Button');
      }}
    >
      Save
    </El.Button>,
  ],
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  body: (
    <El.Block size="md" color="#text-soft">
      Use Instagram posts to share your products with millions of people. Let shoppers buy from your store without
      leaving Instagram.
    </El.Block>
  ),
  footerContent: {
    primary: {
      text: 'Save',
      onTap: function () {
        console.log('Primary Button is tapped');
      },
    },
    secondary: {
      text: 'Close',
    },
  },
};

const Template2 = function ({ ...args }) {
  const [show, setShow] = React.useState('no');

  const toggleShow = React.useCallback(() => {
    setShow((tempShow) => (tempShow == 'yes' ? 'no' : 'yes'));
  }, [setShow]);

  React.useEffect(() => {}, [toggleShow]);

  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
      <Modal onCloseAction={toggleShow} show={show} {...args}>
        <ModalHeader heading="This is my heading" onCloseAction="true"></ModalHeader>
        <ModalBody>This is my Custom Modal Body</ModalBody>
        <ModalFooter footerContent={<>This is Custom Modal Footer</>}></ModalFooter>
      </Modal>
      <El.Button onTap={toggleShow}>Click Me</El.Button>
    </El.NumlProvider>
  );
};

export const ModalWithChlidrens = Template2.bind({});
ModalWithChlidrens.args = {};
