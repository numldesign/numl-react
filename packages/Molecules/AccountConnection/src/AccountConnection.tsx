import React, { useCallback, useState } from 'react';
import { El } from '@numl-react/core';
import { Avatar } from '../../../Atoms/Avatar';

function AccountConnection(allProps: any): JSX.Element {
  const {
    username,
    children,
    subtitle,
    onConnectionChange,
    gap = '1',
    flow = 'column',
    items = 'stretch',
    padding = '1.25',
    ...otherProps
  } = allProps;

  // eslint-disable-next-line react/destructuring-assignment
  const [isConnected, setIsConnected] = useState(Boolean(allProps.isConnected));

  const handleConnect = useCallback(() => {
    setIsConnected(!isConnected);
    onConnectionChange({ connected: !isConnected });
  }, [setIsConnected]);

  return (
    <El.Card
      padding={padding}
      gap={gap}
      width="77.75"
      flow={flow}
      items={items}
      {...otherProps}
    >
      <El.Pane content="space-between" flow="row wrap" gap="1x">
        {isConnected ? (
          <Avatar.Profile
            gap
            username={username}
            subtitle={subtitle}
            showIcon="false"
          />
        ) : (
          <El.Block>
            <El.Block size="md" text="sb">
              {username}
            </El.Block>
            <El.Block size="sm" color="#text-soft">
              {subtitle}
            </El.Block>
          </El.Block>
        )}
        <El.Block>
          <El.Button
            theme={!isConnected ? 'special' : 'default'}
            onTap={handleConnect}
          >
            {isConnected ? 'Disconnect' : 'Connect'}
          </El.Button>
        </El.Block>
      </El.Pane>
      {children ? <El.Block>{children}</El.Block> : null}
    </El.Card>
  );
}

export default AccountConnection;
