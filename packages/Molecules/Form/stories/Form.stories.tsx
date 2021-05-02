import React from 'react';
import {
  Form,
  FormCheck,
  FormField,
  FormInput,
  FormLabel,
  FormSubmit,
  NumlProvider,
  ThemeProvider,
} from '../../../entry';

export default {
  title: 'Example/Molecules/Form',
  component: Form,
};

const Template = function (props: any) {
  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75"></ThemeProvider>
      <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
      <Form {...props}>
        Hello Umer
        <FormField name="name">
          <FormLabel>Name</FormLabel>
          <FormInput grow="1" placeholder="Focus"></FormInput>
          <FormCheck
            message="Name should not contain digits or any special characters"
            assert={(val) => typeof val === 'string' && val.match(/^[a-z]*$/i)}
          ></FormCheck>
        </FormField>
        <FormField name="username">
          <FormLabel>User Name</FormLabel>
          <FormInput grow="1"></FormInput>
          <FormCheck message="This field is required" assert="required"></FormCheck>
        </FormField>
        <FormField name="email">
          <FormLabel>Email Address</FormLabel>
          <FormInput grow="1"></FormInput>
          <FormCheck message="Email Address is required" assert="required"></FormCheck>
        </FormField>
        <FormSubmit>Submit</FormSubmit>
      </Form>
    </NumlProvider>
  );
};

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
