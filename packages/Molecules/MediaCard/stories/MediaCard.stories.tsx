import React from 'react';
import Root from '../../../Components/Root';
import { MediaCard } from '../index';

export default {
  title: 'Example/Molecules/MediaCard',
  component: MediaCard,
};

export const Default = (args) => {
  return (
    <Root>
      <MediaCard {...args}></MediaCard>
    </Root>
  );
};
