import React, { useState, useCallback } from 'react';
import T from 'prop-types';

import Avatar from './Avatar';
import Button from './Button';

export default function AccountConnection(allProps) {
  const { username, description, onConnectionChange, ...otherProps } = allProps;

  const [isConnected, setIsConnected] = useState(Boolean(allProps.isConnected));

  const handleConnect = useCallback(() => {
    setIsConnected(!isConnected);
    onConnectionChange({ connected: !isConnected });
  }, [isConnected]);

  return (
    <nu-block radius="1x" border="1bw" fill="bg" {...otherProps}>
      <nu-flex content="space-between" items="flex-start" flow="row wrap">
        {isConnected ? (
          <Avatar.Profile
            username={username}
            subtitle="Account connected"
            padding="2x"
            radius="0x"
            border="0bw"
          >
            <Avatar username={username} />
          </Avatar.Profile>
        ) : (
          <nu-block padding="2x">
            <nu-block size="md" text="sb">
              {username}
            </nu-block>
            <nu-block size="sm" color="#text-soft">
              No account connected
            </nu-block>
          </nu-block>
        )}
        <nu-block padding="2x">
          <Button
            special={isConnected ? undefined : true}
            onClick={handleConnect}
          >
            {isConnected ? 'Disconnect' : 'Connect'}
          </Button>
        </nu-block>
      </nu-flex>
      {!isConnected && <nu-block padding="0 2x 2x 2x">{description}</nu-block>}
    </nu-block>
  );
}

AccountConnection.propTypes = {
  username: T.string,
  description: T.string,
  onConnectionChange: T.func,
};
