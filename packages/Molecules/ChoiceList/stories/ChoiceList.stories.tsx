import React, { useCallback, useState } from 'react';
import * as El from '@numl-react/elements';
import ChoiceList from '../src/ChoiceList';
import TextInput from '../../../Atoms/TextInput/src/TextInput';

export default {
  title: 'Example/Molecules/ChoiceList',
  component: ChoiceList,
};

const Template = (args) => (
  <>
    <ChoiceList {...args} />
  </>
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
    <>
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
    </>
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
