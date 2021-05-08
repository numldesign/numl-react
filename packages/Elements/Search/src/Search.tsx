import React from 'react';

const Search = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-search',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Search;
