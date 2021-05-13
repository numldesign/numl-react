import React, { useCallback, useState } from 'react';
import { Avatar } from '@numl-react/atoms';
import { El } from '@numl-react/core';

function AccountConnection(allProps: any): JSX.Element {
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

  // eslint-disable-next-line react/destructuring-assignment
  const [isConnected, setIsConnected] = useState(Boolean(allProps.isConnected));

  const handleConnect = useCallback(() => {
    setIsConnected(!isConnected);
    onConnectionChange({ connected: !isConnected });
  }, [isConnected]);

  return (
    <El.Pane
      radius={radius}
      border={border}
      fill={fill}
      padding={padding}
      gap={gap}
      flow={flow}
      items={items}
      {...otherProps}
    >
      <El.Pane content="space-between" flow="row wrap" gap="1x">
        {isConnected ? (
          <>
            <Avatar.Icon size="2" username={username} />
            <Avatar.Profile size="sm" username={username} subtitle={subtitle} />
          </>
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
            onClick={handleConnect}
          >
            {isConnected ? 'Disconnect' : 'Connect'}
          </El.Button>
        </El.Block>
      </El.Pane>
      {children ? <El.Block>{children}</El.Block> : null}
    </El.Pane>
  );
}

export default AccountConnection;
