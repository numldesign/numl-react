import React from 'react';
import { Icon } from '../../../Atoms/Icon';
import { Pane } from '../../../Elements/Pane';
import { Block } from './../../../Elements/Block';
import { TBannerProps } from './Banner.type';

function Banner(allProps: TBannerProps): JSX.Element {
  const { prefix, heading, children, footerActions, closeAction, ...otherProps } = allProps;

  return (
    <Pane radius="1x" border="1bw" fill="bg" padding="2x" gap="2x" items="start" {...otherProps}>
      {prefix && typeof prefix === 'string' ? <Icon name={prefix} /> : prefix}
      <Pane flex="1" items="flex-start" flow="column" gap="2x">
        <Block>
          {heading ? (
            <Block text="sb" size="lg" color="#text-soft">
              {heading}
            </Block>
          ) : null}
          {children ? (
            <Block text="sb" size="md" color="#text">
              {children}
            </Block>
          ) : null}
        </Block>
        {footerActions ? <Block>{footerActions}</Block> : null}
      </Pane>
      {closeAction ? closeAction : null}
    </Pane>
  );
}

export default Banner;
