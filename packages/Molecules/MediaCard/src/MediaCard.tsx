import React from 'react';
import { El } from '@numl-react/core';
import Button from '../../../Atoms/Button/src/Button';

function MediaCard(props: any): JSX.Element {
  const {
    src,
    action,
    menu,
    heading,
    description,
    padding = '2.5x',
    columns = 'auto',
    ...otherProps
  } = props;
  return (
    <El.Card flex gap padding={padding} columns={columns} {...otherProps}>
      <El.Image src={src} width="100%" />
      <El.Flex gap text="bold" content="space-between" items="center">
        {heading}
        <Button
          icon="ellipsis-horizontal-outline"
          dropdownIcon="false"
          menu={menu}
        />
      </El.Flex>
      <El.Flex gap>{description || null}</El.Flex>
      <El.Flex gap>{action || null}</El.Flex>
    </El.Card>
  );
}

MediaCard.Image = (props: any): JSX.Element => {
  const { src, ...otherProps } = props;
  return (
    <El.Flex {...otherProps}>
      <El.Image src={src} width="100%" />
    </El.Flex>
  );
};

export default MediaCard;
