import React from 'react';
import * as El from '@numl-react/elements';
import { Button } from '@numl-react/atoms';
import { ForunIcon } from '../../TopBar/src/ForunIcon';

function ContextualSaveBar(props: any): JSX.Element {
  /** working on this */

  const {
    fill = 'light',
    items = 'center',
    content = 'space-between',
    padding = '1.5x 2x',
    message,
    button,
  } = props;
  return (
    <El.Flex gap fill={fill} items={items} content={content} padding={padding}>
      <El.Block hide="n|n|n|y">
        <ForunIcon />
      </El.Block>
      <El.Flex
        items="center"
        width="70%|70%|70%|100%"
        content="space-between"
        text="bold"
        color="#bg"
      >
        {message}
        <Button.Group>{button}</Button.Group>
      </El.Flex>
    </El.Flex>
  );
}

ContextualSaveBar.displayName = 'ContextualSaveBar';
export { ContextualSaveBar };
