import React, { useCallback, useState } from 'react';
import { TAccountConnectionProps } from './AccountConnection.type';
import { Avatar, Button, Pane, Block } from '../../../entry';

function AccountConnection(allProps: TAccountConnectionProps): JSX.Element {
  const {
    username,
    children,
    subtitle,
    onConnectionChange,
    border = '0.1',
    gap = '1',
    radius = '0.5',
    flow = 'column',
    fill = 'bg',
    items = 'stretch',
    padding = '0.5',
    ...otherProps
  } = allProps;

  const [isConnected, setIsConnected] = useState(Boolean(allProps.isConnected));

  const handleConnect = useCallback(() => {
    setIsConnected(!isConnected);
    onConnectionChange({ connected: !isConnected });
  }, [isConnected]);

  return (
    <Pane
      radius={radius}
      border={border}
      fill={fill}
      padding={padding}
      gap={gap}
      flow={flow}
      items={items}
      {...otherProps}
    >
      <Pane content="space-between" flow="row wrap" gap="1x">
        {true ? (
          <>
            <Avatar.Icon size="2" username={username} />
            <Avatar.Profile size="sm" username={username} subtitle={subtitle} />
          </>
        ) : (
          <Block>
            <Block size="md" text="sb">
              {username}
            </Block>
            <Block size="sm" color="#text-soft">
              {subtitle}
            </Block>
          </Block>
        )}
        <Block>
          <Button theme={!isConnected ? 'special' : 'default'} onClick={handleConnect}>
            {isConnected ? 'Disconnect' : 'Connect'}
          </Button>
        </Block>
      </Pane>
      {children ? <Block>{children}</Block> : null}
    </Pane>
  );
}

export default AccountConnection;
