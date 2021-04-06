import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import { Block } from './../../../Components/Block';
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
        <Block>
          {heading ? (
            <Block text="sb" color="#text-soft">
              {heading}
            </Block>
          ) : null}
          {children ? (
            <Block text="sb" color="#text">
              {children}
            </Block>
          ) : null}
        </Block>
        {footerActions ? <Block>{footerActions}</Block> : null}
      </nu-pane>
      {closeAction ? closeAction : null}
    </nu-pane>
  );
}

export default Banner;
