import * as React from 'react';
import * as El from '@numl-react/elements';
import { ForunIcon } from './ForunIcon';
import { Button, Avatar, TextInput } from '@numl-react/atoms';

const TopBar = (props: any) => {
  const { placeholder, nuLinkAction, subtitle, menu, logo, username } = props;

  return (
    <El.Flex
      width="100vw"
      flow="columns"
      fill="bg"
      responsive="801px|800px"
      padding
      items="center"
      content="space-between"
    >
      <El.Block hide="n|y" to={nuLinkAction}>
        {logo || <ForunIcon />}
      </El.Block>
      <Button hide="y|n" clear>
        <El.Icon size="2" name="menu-outline" />
      </Button>
      <TextInput width="50%" placeholder={placeholder} icon="search-outline" />
      <Avatar
        padding="0"
        username={username}
        subtitle={subtitle}
        clear
        flex
        items="center"
      >
        {menu}
      </Avatar>
    </El.Flex>
  );
};

export { TopBar };
