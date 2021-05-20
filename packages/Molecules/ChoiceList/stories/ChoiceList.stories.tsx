import React, { useCallback, useState } from 'react';
import { NumlProvider, ThemeProvider, TextInput } from '@numl-react/core';
import ChoiceList from '../src/ChoiceList';

export default {
  title: 'Example/Molecules/ChoiceList',
  component: ChoiceList,
};

const Template = (args) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <ChoiceList {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Label',
  choices: [
    { label: 'Label 1', value: 'label_1' },
    { label: 'Label 2', value: 'label_2' },
    { label: 'Label 3', value: 'label_3' },
  ],
  onChange: (props) => console.log(props),
};

export const WithTextBox = (args) => {
  const [selected, setSelected] = useState('label_2');

  const handleChange = useCallback((prop) => {
    setSelected(prop);
  }, []);

  return (
    <NumlProvider>
      <ThemeProvider hue="290" saturation="75" />
      <ThemeProvider name="secondary" hue="240" saturation="75" />

      <ChoiceList
        {...args}
        heading="Label"
        choices={[
          { label: 'Label 1', value: 'label_1' },
          { label: 'Label 2', value: 'label_2' },
          {
            label: 'Label 3 With TextBox',
            value: 'label_3',
            renderChildren: <TextInput placeholder="Label 3 Text Field" />,
          },
        ]}
        selected={selected}
        onChange={handleChange}
      />
    </NumlProvider>
  );
};

export const WithMultiSelect = Template.bind({});
WithMultiSelect.args = {
  multiSelect: true,
  heading: 'Label',
  choices: [
    { label: 'Label 1', value: 'label_1', helpText: 'Help Text' },
    { label: 'Label 2', value: 'label_2', helpText: 'Help Text' },
    { label: 'Label 3', value: 'label_3', helpText: 'Help Text' },
  ],
  selected: ['label_3', 'label_2'],
  onChange: (props) => console.log(props),
};
