import React from 'react';
import { El } from '@numl-react/core';
import Button from '../../../Atoms/Button/src/Button';

function MediaCard(props: any): JSX.Element {
  const {
    src,
    action,
    heading,
    description,
    padding = '2.5x',
    columns = 'auto',
    ...otherProps
  } = props;
  return (
    <El.Card
      flex
      gap="2"
      width="max 40x"
      flow="row wrap"
      padding={padding}
      columns={columns}
      {...otherProps}
    >
      <El.Image src={src} width="100%" height="10" />
      <El.Flex content="space-between" items="center" gap>
        <El.BaseElement text="bold" padding="0">
          {heading}
        </El.BaseElement>
        <Button icon="ellipsis-horizontal-outline" clear />
      </El.Flex>
      <El.Flex content="start" padding="0" items="center" gap>
        {description || null}
      </El.Flex>
      <El.Spacer />
      <El.Flex content="start" items="center" gap>
        {action || null}
      </El.Flex>
    </El.Card>
  );
}

export default MediaCard;
