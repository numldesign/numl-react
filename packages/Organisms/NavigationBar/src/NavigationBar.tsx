import { El } from '@numl-react/core';
import { useEventListener } from '@numl-react/utility';
import React from 'react';
import Menu from '../../../Molecules/Menu/src/Menu';

function NavigationBar(props: any): JSX.Element {
  const { height = '100%', children, footer } = props;

  return (
    <Menu
      flex
      height={height}
      flow="column"
      content="space-between"
      width="min 256px"
    >
      <El.Block overflow="auto">
        <El.Grid
          content="space-between stretch"
          xl="1fr"
          lg="1fr"
          md="1fr"
          sm="1fr"
          xs="1fr"
        >
          {children}
        </El.Grid>
      </El.Block>
      <El.Footer>
        <El.Block border="top">{React.Children.toArray(footer)}</El.Block>
      </El.Footer>
    </Menu>
  );
}

type NavigationItem = {
  label?: string;
  icon?: string | React.ReactElement;
  children?: string | React.ReactElement;
  onClick?: (event: React.SyntheticEvent) => void;
  beforeClick?: (event: React.SyntheticEvent) => void;
  afterClick?: (event: React.SyntheticEvent) => void;
  to?: string;
  dropdown?: boolean;
};

NavigationBar.Item = (props: NavigationItem) => {
  const {
    label,
    icon,
    children,
    onClick,
    beforeClick,
    afterClick,
    dropdown = false,
  } = props;
  const buttonRef = React.useRef(null);

  const clickEvent: any = (event: React.SyntheticEvent) => {
    beforeClick && beforeClick(event);
    onClick && onClick(event);
    afterClick && afterClick(event);
  };

  useEventListener('click', clickEvent, buttonRef);

  return (
    <El.Menuitem
      gap="2x"
      flex
      width="100%"
      content="space-between"
      ref={buttonRef}
    >
      <El.Flex gap="2x">
        {icon && typeof icon === 'string' ? <El.Icon name={icon} /> : icon}
        <El.BaseElement>{label || children}</El.BaseElement>
      </El.Flex>
      {dropdown || dropdown == true ? (
        <El.DropdownIcon theme="default" />
      ) : null}
    </El.Menuitem>
  );
};

const NavigationChild = function ({ item }) {
  const [state, setState] = React.useState(true);

  React.useEffect(() => {}, [state]);

  return (
    <>
      <NavigationBar.Item
        icon={item.icon}
        label={item.label}
        to={item.to}
        beforeClick={() => {
          setState(!state);
          return item.beforeClick;
        }}
        dropdown={item.subNavigationItems ? true : false}
        onClick={item.onClick}
      />
      {item.subNavigationItems ? (
        <El.Block padding="left 2.5rem" hide={state ? 'y' : 'n'}>
          {React.Children.toArray(
            item.subNavigationItems.length > 0 &&
              item.subNavigationItems.map((navItem: any) => {
                const { icon, ...items } = navItem;
                return <NavigationChild item={items} />;
              })
          )}
        </El.Block>
      ) : null}
    </>
  );
};
NavigationBar.Section = function ({ items, title = null }): JSX.Element {
  return (
    <>
      {title ? (
        <El.BaseElement padding="top 2x">
          <El.Label padding="1x">{title}</El.Label>
        </El.BaseElement>
      ) : null}
      {React.Children.toArray(
        items &&
          items.map((eachItem: any) => (
            <>
              <NavigationChild item={eachItem} />
            </>
          ))
      )}
    </>
  );
};

export default NavigationBar;
