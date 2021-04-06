import React, { useCallback, useState } from 'react';
import { Avatar } from './../../../Atoms/Avatar';
import { Button } from './../../../Atoms/Button';
import { TAccountConnectionProps } from './AccountConnection.type';

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
    console.log('I am umer');
    setIsConnected(!isConnected);
    onConnectionChange({ connected: !isConnected });
  }, [isConnected]);

  return (
    <nu-pane
      radius={radius}
      border={border}
      fill={fill}
      padding={padding}
      gap={gap}
      flow={flow}
      items={items}
      {...otherProps}
    >
      <nu-pane content="space-between" flow="row wrap" gap="1x">
        {true ? (
          <>
            <Avatar.Icon size="2" username={username} />
            <Avatar.Profile size="2" username={username} subtitle={subtitle} />
          </>
        ) : (
          <nu-block>
            <nu-block size="md" text="sb">
              {username}
            </nu-block>
            <nu-block size="sm" color="#text-soft">
              {subtitle}
            </nu-block>
          </nu-block>
        )}
        <nu-block>
          <Button
            theme={!isConnected ? 'special' : 'default'}
            onClick={handleConnect}
          >
            {isConnected ? 'Disconnect' : 'Connect'}
          </Button>
        </nu-block>
      </nu-pane>
      {children ? <nu-block>{children}</nu-block> : null}
    </nu-pane>
  );
}

export default AccountConnection;
