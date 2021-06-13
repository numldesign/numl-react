import { Form } from '@numl-react/core';
import React from 'react';

export default {
  title: 'Numl React/Molecules/Form',
  component: Form,
};

const Template = ({ ...args }) => (
  <>
    <Form>
      <Form.Field>
        <Form.Label>Name</Form.Label>
        <Form.Input id="name" grow="1" />
        <Form.Check
          name="name"
          message="Name should not contain digits or any special characters"
          assert={(val) => {
            return val && val.length > 3;
          }}
        />
      </Form.Field>
      <Form.Field>
        <Form.Label>User Name</Form.Label>
        <Form.Input id="username" grow="1" />
        <Form.Check
          name="username"
          message="This field is required"
          assert="required"
        />
      </Form.Field>
      <Form.Field>
        <Form.Label>Email Address</Form.Label>
        <Form.Input id="email" grow="1" />
        <Form.Check
          name="email"
          message="Email Address is required"
          assert="required"
        />
      </Form.Field>
      <Form.Submit>Submit</Form.Submit>
    </Form>
  </>
);

const Template2 = ({ ...args }) => (
  <>
    <Form.Builder {...args}></Form.Builder>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Main = Template2.bind({});
Main.args = {
  form: [
    {
      name: 'fname',
      label: 'First Name',
      message: 'All characters must be Alphanumeric',
      assert: (val) => val && val.length > 3 && val.length < 8,
    },
    {
      name: 'lname',
      label: 'Last Name',
      assert: 'required',
      message: 'All characters must be Alphabets',
    },
    {
      name: 'username',
      label: 'User Name',
      assert: 'required',
      message: 'All characters must not contain special characters',
    },
    {
      name: 'email',
      label: 'Email Address',
      assert: 'required',
      message: 'All characters must be Alphabets',
    },
    {
      name: 'age',
      label: 'Age',
      assert: 'required',
      message: 'All characters must be numeric',
    },
    {
      name: 'blogurl',
      label: 'Website / Blog URL',
      assert: 'required',
      message: 'String must be HTTP/FTP URI',
    },
    {
      name: 'required',
      label: 'Required',
      assert: 'required',
      message: 'This field is required',
    },
  ],
};
