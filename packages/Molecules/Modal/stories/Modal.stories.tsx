import * as React from 'react';
import { Modal } from '../../../entry';
import { El } from '../../../entry';

export default {
  title: 'Example/Molecules/Modal',
  component: Modal,
};

const Template = function ({ ...args }) {
  const input: any = React.useRef();
  const button: any = React.useRef();
  const [show, setShow] = React.useState('n');

  const hideModal = (event) => {
    event.preventDefault();
    console.log('I am called');
    console.log(input);
    console.log(button);
    // if(button && button.current){
    //   setShow
    // }
  };

  return (
    <El.NumlProvider>
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
      <Modal {...args} ref={input} onCloseAction={hideModal} show={show}>
        Click me
      </Modal>
      <El.Button ref={button} onTap={() => console.log('onClick')}>
        Click Me
      </El.Button>
    </El.NumlProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  heading: 'Reach more shoppers with Instagram product tags',
  onCloseAction: function () {
    console.log('onCloseAction triggered');
  },
  body: (
    <El.Block size="md" color="#text-soft">
      This will reset your device to its default factor settings
    </El.Block>
  ),
  footerActions: [
    <El.Button
      key="1"
      onClick={() => {
        console.log('Secondary clicked');
      }}
    >
      Close
    </El.Button>,
    <El.Button
      key="2"
      theme="special"
      onClick={() => {
        console.log('umer');
      }}
    >
      Primary
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
  footerActions: [
    <El.Button key="1">Close</El.Button>,
    <El.Button key="2" special>
      Primary
    </El.Button>,
  ],
};

const Template2 = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
    <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
    <El.Button>Show Button</El.Button>
    <Modal modalId="modalId" width="50">
      <Modal.Header heading="This is my heading" onCloseAction="true"></Modal.Header>
      <Modal.Body>Hello I am umer</Modal.Body>
      <Modal.Footer>This is muy footer</Modal.Footer>
    </Modal>
  </El.NumlProvider>
);

export const ModalWithChlidrens = Template2.bind({});
ModalWithChlidrens.args = {
  heading: 'Reach more shoppers with Instagram product tags',
  onCloseAction: function () {
    console.log('onCloseAction triggered');
  },
  body: (
    <El.Block size="md" color="#text-soft">
      This will reset your device to its default factor settings
    </El.Block>
  ),
  footerActions: [
    <El.Button
      key="1"
      onClick={() => {
        console.log('Secondary clicked');
      }}
    >
      Close
    </El.Button>,
    <El.Button
      key="2"
      special
      onClick={() => {
        console.log('Primary clicked');
      }}
    >
      Primary
    </El.Button>,
  ],
};
