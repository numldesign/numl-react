import React from 'react';
import * as El from '@numl-react/elements';

const Placeholder = (): JSX.Element => (
  <>
    <El.Placeholder size="h4" opacity=".24" width="20x" />
    <El.Spacer size="3x" />
    <El.Flow gap="2x">
      <El.Placeholder />
      <El.Placeholder />
      <El.Placeholder />
    </El.Flow>
  </>
);

Placeholder.Card = (allProps: any): JSX.Element => (
  <El.Card fill="#special-bg.04" clear {...allProps}>
    <El.Grid columns="auto 1fr" gap="2x">
      <El.Placeholder size="5x" is-circle />
      <El.Flow gap="3x" padding="top 1.5x">
        <El.Placeholder width="15x" />
        <El.Flow gap="2x">
          <El.Placeholder />
          <El.Placeholder />
          <El.Placeholder />
          <El.Placeholder />
        </El.Flow>
      </El.Flow>
    </El.Grid>
  </El.Card>
);

export default Placeholder;
