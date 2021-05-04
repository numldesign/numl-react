import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormCheck, FormField, FormInput, FormLabel, FormSubmit } from '../index';
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form> Hello World!</Form>, div);
});

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormLabel />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormLabel> Hello World!</FormLabel>, div);
});

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormField />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormField> Hello World!</FormField>, div);
});

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormInput />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormInput> Hello World!</FormInput>, div);
});

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormCheck />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormCheck> Hello World!</FormCheck>, div);
});

it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormSubmit />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormSubmit> Hello World!</FormSubmit>, div);
});
