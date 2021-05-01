import * as React from 'react';
import { El, Molecules } from '../../../entry';
import { isRefernceNull } from '../../../Utilities';
import Modal from '../src/Modal';

export default {
  title: 'Example/Molecules/Modal',
  component: Modal,
};

const Template = function ({ ...args }) {
  const input = React.useRef();
  const [show, setShow] = React.useState('no');
  const toggleShow = () => {
    setShow(show == 'yes' ? 'no' : 'yes');
  };
  let storycount = 0;
  React.useEffect(() => {
    console.log('storycount => ' + storycount++);
  });

  const hideModal = () => {
    console.log('Button is clicked', show);
    toggleShow();
  };

  return (
    <El.NumlProvider>
      {show == 'y' ? 'YES SHOW' : 'NO Show'}
      <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
      <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
      <Modal {...args} ref={input} onCloseAction={hideModal} show={show} />
      <El.Button onTap={hideModal}>Click Me</El.Button>
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
    {/* <Molecules.Modal modalId="modalId" width="50">
      <Molecules.Modal.Header heading="This is my heading" onCloseAction="true"></Molecules.Modal.Header>
      <Molecules.Modal.Body>Hello I am umer</Molecules.Modal.Body>
      <Molecules.Modal.Footer>This is muy footer</Molecules.Modal.Footer>
    </Molecules.Modal> */}
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
