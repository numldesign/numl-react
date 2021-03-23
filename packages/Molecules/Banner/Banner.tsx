import T from 'prop-types';
import React from 'react';
import { Icon } from '../../Atoms/Icon';
import { TBannerProps } from './Banner.type';

function Banner(allProps: TBannerProps): JSX.Element {
  const {
    prefix,
    heading,
    children,
    footerActions,
    closeAction,
    ...otherProps
  } = allProps;

  return (
    <nu-pane
      radius="1x"
      border="1bw"
      fill="bg"
      padding="2x"
      gap="2x"
      items="start"
      {...otherProps}
    >
      {prefix && typeof prefix === 'string' ? <Icon name={prefix} /> : prefix}
      <nu-pane flex="1" items="flex-start" flow="column" gap="2x">
        <nu-block>
          {heading ? (
            <nu-block size="md" text="sb" color="#text-soft">
              {heading}
            </nu-block>
          ) : null}
          {children ? (
            <nu-block size="md" text="sb" color="#text">
              {children}
            </nu-block>
          ) : null}
        </nu-block>
        {footerActions ? <nu-block>{footerActions}</nu-block> : null}
      </nu-pane>
      {closeAction ? closeAction : null}
    </nu-pane>
  );
}

Banner.propTypes = {
  prefix: T.oneOfType([T.string, T.element]),
  heading: T.string,
  footerActions: T.arrayOf(T.element),
  closeAction: T.element,
};

export default Banner;