import T from 'prop-types';

export default function ProgressBar(allProps) {
  return <nu-progressbar {...allProps} />;
}

ProgressBar.propTypes = {
  size: T.string,
};
