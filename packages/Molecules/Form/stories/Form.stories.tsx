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

export const FormBuilder = Template2.bind({});
FormBuilder.args = {
  form: [
    {
      name: 'fname',
      label: 'First Name',
      validator: [
        {
          message: 'This Field is required',
          assert: 'required',
        },
      ],
    },
    {
      name: 'lname',
      label: 'Last Name',
      validator: [
        {
          assert: 'required',
          message: 'This Field is required',
        },
      ],
    },
    {
      name: 'username',
      label: 'User Name',
      validator: [
        {
          assert: 'required',
          message: 'This Field is required',
        },
      ],
    },
    {
      name: 'email',
      label: 'Email Address',
      validator: [
        {
          assert: 'required',
          message: 'This Field is required',
        },
      ],
    },
    {
      name: 'age',
      label: 'Age',
      validator: [
        {
          assert: 'required',
          message: 'This Field is required',
        },
      ],
    },
    {
      name: 'blogurl',
      label: 'Website / Blog URL',
      validator: [
        {
          assert: 'required',
          message: 'This Field is required',
        },
      ],
    },
    {
      name: 'required',
      label: 'Required',
      validator: [
        {
          assert: 'required',
          message: 'This Field is required',
        },
        {
          assert: 'minlength:5',
          message: 'Minimum length should be greater than 5',
        },
      ],
    },
  ],
};
