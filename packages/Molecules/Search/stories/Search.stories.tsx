import React from 'react';
import { El, Link, Search } from '../../../entry';

export default {
  title: 'Example/Molecules/Search',
  component: Search,
};

const Template = ({ ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75"></El.ThemeProvider>
    <El.ThemeProvider name="secondary" hue="240" saturation="75"></El.ThemeProvider>
    <Search {...args} />
  </El.NumlProvider>
);

const resultTemplate = (item) => {
  return (
    <El.Grid gap flow="column" columns="4x auto 6x">
      {item.prefix && (
        <El.Block text="center">
          <El.Icon name={item.prefix} />
        </El.Block>
      )}
      {item.emptyGap && <El.Base />}
      {item.title && (
        <El.Block>
          <El.Block text="sb">{item.title}</El.Block>
          {item.description && <El.Block color="#text-strong">{item.description}</El.Block>}
          {item.description2 && <El.Block color="#text-strong">{item.description2}</El.Block>}
        </El.Block>
      )}
      {item.suffix}
    </El.Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  padding: '2x',
  fill: 'bg',
  inputGroupProps: {
    padding: '2px',
    border: 'bottom',
    fill: 'bg',
  },
  inputProps: {
    placeholder: 'Search Here...',
    fill: 'bg',
  },
  extraActions: (
    <El.Pane width="4x">
      <Link to="https://numl.design" icon={<El.Icon name="exit-outline" />} />
    </El.Pane>
  ),
  value: 'acb',
  resultList: [
    {
      prefix: 'add-circle-outline',
      title: 'Create order',
      value: 'value_1',
    },
    {
      emptyGap: true,
      title: 'FANEU ADMIN',
      value: 'value_2',
    },
    {
      prefix: 'arrow-forward-outline',
      title: 'Draft orders',
      description: 'Process, track, and fulfill your orders',
      suffix: (
        <El.Pane text="center" gap=".4x">
          <El.Base fill="bg" radius padding="0 .4x">
            G
          </El.Base>
          <El.Base fill="bg" radius padding="0 .4x">
            O
          </El.Base>
        </El.Pane>
      ),
      value: 'value_3',
    },
    {
      prefix: 'arrow-forward-outline',
      title: 'Draft orders',
      description: 'Process, track, and fulfill your orders',
      description2: 'Orders / Drafts',
      suffix: (
        <El.Block text="center">
          <Link to="https://numl.design" icon={<El.Icon name="exit-outline" />} />
        </El.Block>
      ),
      value: 'value_4',
    },
    {
      emptyGap: true,
      title: <Link to="https://numl.design" label="Show all 8 results" />,
      value: 'value_5',
    },
    {
      emptyGap: true,
      title: 'RESOURCES',
      value: 'value_6',
    },
  ],
  renderResultItem: resultTemplate,
  onSearchInput: (val) => console.log('search ', val),
  onResultItemInput: (val) => console.log('result ', val),
};
