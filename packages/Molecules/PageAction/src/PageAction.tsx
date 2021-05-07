import React from 'react';
import { El } from '@numl-react/core';

function PageAction(allProps: any) {
  const { primaryAction, secondaryActions, ...otherProps } = allProps;
  const flowContent = !!secondaryActions ? 'space-between' : 'flex-end';

  return (
    <El.Pane content={flowContent} {...otherProps}>
      {!!secondaryActions ? (
        <El.Pane>
          {secondaryActions.map((action: any) => {
            return (
              <El.Button key={action.content} theme={action.destructive ? 'danger' : undefined} {...action}>
                {action.content}
              </El.Button>
            );
          })}
        </El.Pane>
      ) : null}
      {!!primaryAction ? (
        <El.Button special {...primaryAction}>
          {primaryAction.content}
        </El.Button>
      ) : null}
    </El.Pane>
  );
}

export default PageAction;
