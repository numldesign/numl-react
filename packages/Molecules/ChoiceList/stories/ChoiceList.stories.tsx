import React from 'react';
import ChoiceList from '../src/ChoiceList';

export default {
  title: 'Numl React/Molecules/ChoiceList',
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

// export const WithTextBox = (args) => {
//   const [selected, setSelected] = useState('label_2');

//   const handleChange = useCallback((prop) => {
//     setSelected(prop);
//   }, []);

//   return (
//     <>
//       <ChoiceList
//         {...args}
//         heading="Label"
//         choices={[
//           { label: 'Label 1', value: 'label_1' },
//           { label: 'Label 2', value: 'label_2' },
//           {
//             label: 'Label 3',
//             value: 'label_3',
//           },
//         ]}
//         selected={selected}
//         onChange={handleChange}
//       />
//     </>
//   );
// };

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
