import React from 'react';
import { NumlProvider, ThemeProvider, Search, Icon, Link, Block, Grid, Base, Pane } from '../../../entry';

export default {
  title: 'Example/Molecules/Search',
  component: Search,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75"></ThemeProvider>
    <ThemeProvider name="secondary" hue="240" saturation="75"></ThemeProvider>
    <Search {...args} />
  </NumlProvider>
);

const resultTemplate = (item) => {
  return (
    <Grid gap flow="column" columns="4x auto 6x">
      {item.prefix && (
        <Block text="center">
          <Icon name={item.prefix} />
        </Block>
      )}
      {item.emptyGap && <Base />}
      {item.title && (
        <Block>
          <Block text="sb">{item.title}</Block>
          {item.description && <Block color="#text-strong">{item.description}</Block>}
          {item.description2 && <Block color="#text-strong">{item.description2}</Block>}
        </Block>
      )}
      {item.suffix}
    </Grid>
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
    <Pane width="4x">
      <Link to="https://numl.design" icon={<Icon name="exit-outline" />} />
    </Pane>
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
        <Pane text="center" gap=".4x">
          <Base fill="bg" radius padding="0 .4x">
            G
          </Base>
          <Base fill="bg" radius padding="0 .4x">
            O
          </Base>
        </Pane>
      ),
      value: 'value_3',
    },
    {
      prefix: 'arrow-forward-outline',
      title: 'Draft orders',
      description: 'Process, track, and fulfill your orders',
      description2: 'Orders / Drafts',
      suffix: (
        <Block text="center">
          <Link to="https://numl.design" icon={<Icon name="exit-outline" />} />
        </Block>
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
