import React from 'react';
import * as El from '@numl-react/elements';
import Avatar from '../../../Atoms/Avatar/src/Avatar';

function AccountConnection(allProps: any): JSX.Element {
  const {
    username,
    children,
    subtitle,
    connection,
    gap = '1',
    flow = 'column',
    isConnected,
    toggle,
    width = '100%',
    items = 'space-between',
    padding = '1.25',
    ...otherProps
  } = allProps;
  return (
    <El.Card
      padding={padding}
      gap={gap}
      width={width}
      flow={flow}
      items={items}
      {...otherProps}
    >
      <El.Pane content="space-between" flow="row wrap" gap="1x">
        {isConnected && (isConnected === true || isConnected === 'true') ? (
          <Avatar.Profile
            username={username}
            subtitle={subtitle}
            responsive="0"
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
        <El.Button theme={!connection ? 'special' : 'default'} onTap={toggle}>
          {connection ? 'Disconnect' : 'Connect'}
        </El.Button>
      </El.Pane>
      {children ? <El.Block>{children}</El.Block> : null}
    </El.Card>
  );
}

export default AccountConnection;
