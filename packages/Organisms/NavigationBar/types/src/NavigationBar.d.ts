import React from 'react';
declare function NavigationBar(props: any): JSX.Element;
declare namespace NavigationBar {
  var Item: (props: NavigationItem) => JSX.Element;
  var Section: ({ items, title }: { items: any; title?: any }) => JSX.Element;
}
declare type NavigationItem = {
  label?: string;
  icon?: string | React.ReactElement;
  children?: string | React.ReactElement;
  onClick?: (event: React.SyntheticEvent) => void;
  beforeClick?: (event: React.SyntheticEvent) => void;
  afterClick?: (event: React.SyntheticEvent) => void;
  to?: string;
  dropdown?: boolean;
};
export { NavigationBar };
