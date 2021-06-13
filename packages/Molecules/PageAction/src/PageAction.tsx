import { El } from '@numl-react/core';
import React from 'react';

function PageAction(allProps: any): JSX.Element {
  const { primaryAction, secondaryActions, ...otherProps } = allProps;
  const flowContent = secondaryActions ? 'space-between' : 'flex-end';

  return (
    <El.Pane content={flowContent} {...otherProps}>
      {secondaryActions ? (
        <El.Pane>
          {React.Children.toArray(
            secondaryActions.map((action: any) => (
              <El.Button
                theme={action.destructive ? 'danger' : undefined}
                {...action}
              >
                {action.content}
              </El.Button>
            ))
          )}
        </El.Pane>
      ) : null}
      {primaryAction ? (
        <El.Button special {...primaryAction}>
          {primaryAction.content}
        </El.Button>
      ) : null}
    </El.Pane>
  );
}

export default PageAction;
