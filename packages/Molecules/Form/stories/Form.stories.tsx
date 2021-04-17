import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Form } from '../index';

export default {
  title: 'Example/Molecules/Form',
  component: Form,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Form {...args}>
      <Form.Field name="name">
        <Form.Label>Name</Form.Label>
        <Form.Input grow="1" placeholder="Focus"></Form.Input>
        <Form.Check
          message="Name should not contain digits or any special characters"
          assert={(val) => typeof val === 'string' && val.match(/^[a-z]*$/i)}
        ></Form.Check>
      </Form.Field>
      <Form.Field name="username">
        <Form.Label>User Name</Form.Label>
        <Form.Input grow="1"></Form.Input>
        <Form.Check message="This field is required" assert="required"></Form.Check>
      </Form.Field>
      <Form.Field name="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Input grow="1"></Form.Input>
        <Form.Check message="Email Address is required" assert="required"></Form.Check>
      </Form.Field>
      <Form.Submit>Submit</Form.Submit>
    </Form>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  formData: [
    {
      name: 'fname',
      label: 'First Name',
      assertion: 'alphanumeric',
      message: 'All characters must be Alphanumeric',
      expression: function (val: string) {
        return typeof val === 'string' && val.match(/^[a-z\d]*$/i);
      },
    },
    {
      name: 'lname',
      label: 'Last Name',
      assertion: 'alphabets',
      message: 'All characters must be Alphabets',
    },
    {
      name: 'username',
      label: 'User Name',
      assertion: 'specialcharacters',
      message: 'All characters must not contain special characters',
    },
    {
      name: 'email',
      label: 'Email Address',
      assertion: 'alphabets',
      message: 'All characters must be Alphabets',
    },
    {
      name: 'age',
      label: 'Age',
      assertion: 'number',
      message: 'All characters must be numeric',
    },
    {
      name: 'blogurl',
      label: 'Website / Blog URL',
      assertion: 'url',
      message: 'String must be HTTP/FTP URI',
    },
    {
      name: 'required',
      label: 'Required',
      assertion: 'required',
      message: 'This field is required',
    },
  ],
};
