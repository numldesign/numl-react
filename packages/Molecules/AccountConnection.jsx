import React, { useState, useCallback } from 'react';
import T from 'prop-types';

import Avatar from '../Atoms/Avatar';
import Button from '../Atoms/Button';

export default function AccountConnection(allProps) {
  const { username, children, onConnectionChange, ...otherProps } = allProps;

  const [isConnected, setIsConnected] = useState(Boolean(allProps.isConnected));

  const handleConnect = useCallback(() => {
    setIsConnected(!isConnected);
    onConnectionChange({ connected: !isConnected });
  }, [isConnected]);

  return (
    <nu-pane
      radius="1x"
      border="1bw"
      fill="bg"
      padding="2x"
      flow="column"
      items="stretch"
      {...otherProps}
    >
      <nu-pane content="space-between" flow="row wrap" gap="1x">
        {isConnected ? (
          <Avatar.Profile
            username={username}
            subtitle="Account connected"
            radius="0x"
            border="0bw"
            padding="0"
          >
            <Avatar username={username} />
          </Avatar.Profile>
        ) : (
          <nu-block>
            <nu-block size="md" text="sb">
              {username}
            </nu-block>
            <nu-block size="sm" color="#text-soft">
              No account connected
            </nu-block>
          </nu-block>
        )}
        <nu-block>
          <Button
            special={isConnected ? undefined : true}
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

AccountConnection.propTypes = {
  isConnected: T.bool,
  username: T.string,
  onConnectionChange: T.func,
};
