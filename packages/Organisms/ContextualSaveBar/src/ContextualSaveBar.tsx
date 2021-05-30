import React from 'react';
import { El } from '@numl-react/core';
import { ForunIcon } from '../../TopBar/src/ForunIcon';
import Button from '../../../Atoms/Button/src/Button';

function ContextualSaveBar(props: any): JSX.Element {
  /** working on this */

  const {
    fill = 'light',
    items = 'center',
    content = 'space-between',
    row = '30vw 70vw|100vw',
    padding = '1.5x 2x',
    responsive = '800px|799px',
    message,
    button,
  } = props;
  return (
    <El.Flex
      gap
      fill={fill}
      row={row}
      items={items}
      content={content}
      responsive={responsive}
      padding={padding}
    >
      <El.Block hide="n|y">
        <ForunIcon />
      </El.Block>
      <El.Flex items="center" width="70vw|100vw" content="space-between">
        <El.Block text="bold" color="#bg">
          {message}
        </El.Block>
        <Button.Group>{button}</Button.Group>
      </El.Flex>
    </El.Flex>
  );
}

export default ContextualSaveBar;
