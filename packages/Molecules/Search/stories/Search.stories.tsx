import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import { Link } from '../../../Atoms/Link';
import Root from '../../../Elements/Root';
import { Search } from '../index';

export default {
  title: 'Example/Molecules/Search',
  component: Search,
};

const Template = ({ ...args }) => (
  <Root>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Search {...args} />
  </Root>
);

const resultTemplate = (item) => {
  return (
    <nu-grid gap flow="column" columns="4x auto 6x">
      {item.prefix && (
        <nu-block text="center">
          <Icon name={item.prefix} />
        </nu-block>
      )}
      {item.emptyGap && <nu-el />}
      {item.title && (
        <nu-block>
          <nu-block text="sb">{item.title}</nu-block>
          {item.description && <nu-block color="#text-strong">{item.description}</nu-block>}
          {item.description2 && <nu-block color="#text-strong">{item.description2}</nu-block>}
        </nu-block>
      )}
      {item.suffix}
    </nu-grid>
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
    <nu-pane width="4x">
      <Link to="https://numl.design" icon={<Icon name="exit-outline" />} />
    </nu-pane>
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
        <nu-pane text="center" gap=".4x">
          <nu-el fill="bg" radius padding="0 .4x">
            G
          </nu-el>
          <nu-el fill="bg" radius padding="0 .4x">
            O
          </nu-el>
        </nu-pane>
      ),
      value: 'value_3',
    },
    {
      prefix: 'arrow-forward-outline',
      title: 'Draft orders',
      description: 'Process, track, and fulfill your orders',
      description2: 'Orders / Drafts',
      suffix: (
        <nu-block text="center">
          <Link to="https://numl.design" icon={<Icon name="exit-outline" />} />
        </nu-block>
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
