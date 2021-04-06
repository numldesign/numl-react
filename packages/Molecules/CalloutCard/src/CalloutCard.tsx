import React from 'react';
import { Block } from './../../../Components/Block';
import { Grid } from './../../../Components/Grid';
import { Image } from './../../../Components/Image';
import { TCalloutCardProps } from './CalloutCard.type';

function CalloutCard(allProps: TCalloutCardProps): JSX.Element {
  const {
    heading,
    description,
    actions,
    padding = 1,
    src,
    extra,
    closeAction,
    ...otherProps
  } = allProps;
  return (
    <nu-card padding={padding} {...otherProps}>
      <Grid columns="auto" content="space-between">
        {src ? (
          <Grid.Row row="1">
            <Image width="100%" fit="fill" src={src}></Image>
          </Grid.Row>
        ) : null}
        {heading ? (
          <Grid.Row row="2">
            <nu-el text="sb">{heading}</nu-el>
          </Grid.Row>
        ) : null}
        {description ? (
          <Grid.Row row="3">
            <nu-el size="sm">{description}</nu-el>
          </Grid.Row>
        ) : null}
        {actions ? <Grid.Row row="4">{actions}</Grid.Row> : null}
      </Grid>
    </nu-card>
  );
}

CalloutCard.Landscape = function CalloutCardLandScape(props) {
  const {
    children,
    padding,
    src,
    heading,
    actions,
    description,
    ...otherProps
  } = props;
  return (
    <nu-flow gap>
      <nu-card padding={padding} gap="0.5" {...otherProps}>
        <Grid
          responsive="800px|801px"
          columns="auto auto|auto"
          gap
          content="space-between"
          width="100%"
        >
          {heading && description ? (
            <Grid.Column column="1|1" row="1|2">
              <Block>
                <nu-el text="sb">{heading}</nu-el>
              </Block>
              <Block>
                <nu-el size="sm">{description}</nu-el>
              </Block>
              {actions ? <nu-el padding="1 0">{actions}</nu-el> : null}
            </Grid.Column>
          ) : null}
          {src ? (
            <Grid.Column column="2|1" row="1|1">
              <Image height="auto" src={src}></Image>
            </Grid.Column>
          ) : null}
        </Grid>
      </nu-card>
    </nu-flow>
  );
};

export default CalloutCard;
