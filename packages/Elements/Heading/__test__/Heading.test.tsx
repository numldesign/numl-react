import React from 'react';
import ReactDOM from 'react-dom';
import { Heading } from '../index';

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading> Hello World!</Heading>, div);
});

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.One />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.One> Hello World!</Heading.One>, div);
});

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Two />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Two> Hello World!</Heading.Two>, div);
});

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Three />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Three> Hello World!</Heading.Three>, div);
});

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Four />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Four> Hello World!</Heading.Four>, div);
});

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Five />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Five> Hello World!</Heading.Five>, div);
});

/** Heading element test */
it('Renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Six />, div);
});

it('Renders without crashing with children', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading.Six> Hello World!</Heading.Six>, div);
});
