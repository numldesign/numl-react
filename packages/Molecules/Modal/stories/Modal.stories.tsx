import {
  El,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@numl-react/core';
import * as React from 'react';

// @ts-ignore

export default {
  title: 'Numl React/Molecules/Modal',
  component: Modal,
};

const Template = function ({ ...args }) {
  const [show, setShow] = React.useState('no');

  const toggleShow = React.useCallback(() => {
    setShow((tempShow) => (tempShow == 'yes' ? 'no' : 'yes'));
  }, [setShow]);

  React.useEffect(() => {}, [toggleShow]);

  return (
    <>
      <Modal {...args} onCloseAction={toggleShow} show={show} />
      <El.Button onTap={toggleShow}>Click Me</El.Button>
    </>
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
      onTap() {
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
      Use Instagram posts to share your products with millions of people. Let
      shoppers buy from your store without leaving Instagram.
    </El.Block>
  ),
  footerContent: {
    primary: {
      text: 'Save',
      onTap() {
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
    <>
      <Modal onCloseAction={toggleShow} show={show} {...args}>
        <ModalHeader heading="This is my heading" onCloseAction="true" />
        <ModalBody>This is my Custom Modal Body</ModalBody>
        <ModalFooter footerContent={<>This is Custom Modal Footer</>} />
      </Modal>
      <El.Button onTap={toggleShow}>Click Me</El.Button>
    </>
  );
};

export const ModalWithChlidrens = Template2.bind({});
ModalWithChlidrens.args = {};
