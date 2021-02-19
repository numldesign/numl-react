import T from 'prop-types';

export default function RangeSlider(allProps) {
  const { id = 'value', ...otherProps } = allProps;
  return (
    <nu-block>
      <nu-slider control={`${id}[value]`} trigger {...otherProps} />
      <nu-tooltip width="max-content">
        <nu-value id={id} padding></nu-value>
      </nu-tooltip>
    </nu-block>
  );
}

RangeSlider.propTypes = {
  id: T.string,
  size: T.string,
  min: T.string,
  max: T.string,
  value: T.string,
  step: T.string,
};
