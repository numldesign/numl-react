import React from 'react';
import {
  NumlProvider,
  ThemeProvider,
  Card,
  Button,
  El,
} from '@numl-react/core';

export default {
  title: 'Example/Molecules/Card',
  component: Card,
};

const Template: any = (props) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Card {...props} />
  </El.NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

export const WithSubHeading = Template.bind({});
WithSubHeading.args = {
  heading: 'Heading',
  subheading: 'Sub Heading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

export const WithHeaderAction = Template.bind({});
WithHeaderAction.args = {
  heading: 'Heading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<El.Button color="special">Click Me</El.Button>],
};

export const SubHeadingAction = Template.bind({});
SubHeadingAction.args = {
  heading: 'Heading',
  subheading: 'Sub Heading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<El.Button color="special">Click Me</El.Button>],
};

export const WithFooterAction = Template.bind({});
WithFooterAction.args = {
  heading: 'Heading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  footerActions: [
    <El.Button key="1">Button</El.Button>,
    <El.Button special>Click Me</El.Button>,
  ],
};

export const WithBodyAction = Template.bind({});
WithBodyAction.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  bodyActions: [<El.Button color="special">Click Me</El.Button>],
};

export const WithHeaderAndFooterAction = Template.bind({});
WithHeaderAndFooterAction.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<El.Button color="special">Click Me</El.Button>],
  footerActions: [
    <El.Button key="1">Button</El.Button>,
    <El.Button special>Click Me</El.Button>,
  ],
};

export const SectionExample = Template.bind({});
SectionExample.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  headerActions: [<El.Button color="special">Click Me</El.Button>],
  footerActions: [
    <El.Button>Button</El.Button>,
    <El.Button special>Click Me</El.Button>,
  ],
  children: [
    <Card.Section
      subheading="Subheading"
      bodyActions={[
        <El.Button key="1" border="0" color="special">
          Click Me
        </El.Button>,
      ]}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Card.Section>,
    <Card.Section
      subheading="Subheading"
      bodyActions={[
        <El.Button key="1" border="0" color="special">
          Click Me
        </El.Button>,
      ]}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Card.Section>,
  ],
};
