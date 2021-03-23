import React from 'react';
import { Button } from '../../Atoms/Button';
import { TPageActionProps } from './PageAction.type';

function PageAction(allProps: TPageActionProps) {
  const { primaryAction, secondaryActions, ...otherProps } = allProps;
  const flowContent = !!secondaryActions ? 'space-between' : 'flex-end';

  return (
    <nu-pane content={flowContent} {...otherProps}>
      {!!secondaryActions ? (
        <nu-pane>
          {secondaryActions.map((action: any) => {
            return (
              <Button
                key={action.content}
                theme={action.destructive ? 'danger' : undefined}
                {...action}
              >
                {action.content}
              </Button>
            );
          })}
        </nu-pane>
      ) : null}
      {!!primaryAction ? (
        <Button special {...primaryAction}>
          {primaryAction.content}
        </Button>
      ) : null}
    </nu-pane>
  );
}

export default PageAction;
