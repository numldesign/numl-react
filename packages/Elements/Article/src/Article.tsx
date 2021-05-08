import React from 'react';

const Article = React.forwardRef((props: any, ref) => {
  const { children, ...otherProps } = props;

  return React.createElement(
    'nu-article',
    {
      ...otherProps,
      ref,
    },
    [children]
  );
});

export default Article;
