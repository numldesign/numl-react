import React from 'react';
import { El } from '@numl-react/core';
import Checkbox from '../../../Atoms/Checkbox/src/Checkbox';

const OptionList = (props: any): JSX.Element => {
  const { items, gap = '2x', fill = 'bg', ...otherProps } = props;
  return (
    <El.Menu fill={fill} {...otherProps}>
      {items && typeof items === 'object' ? (
        <>
          {items.map((eachItem: any) => (
            <OptionList.Item gap={gap} item={eachItem} />
          ))}
        </>
      ) : null}
    </El.Menu>
  );
};

OptionList.Heading = (props: any) => {
  const { children, ...otherProps } = props;
  return (
    <El.Label padding="0.5 1.5x" text="up bold" {...otherProps}>
      {children}
    </El.Label>
  );
};

OptionList.Item = (props: any) => {
  const { item, gap, ...otherProps } = props;
  return (
    <>
      {item && item.heading ? (
        <OptionList.Heading>{item.heading}</OptionList.Heading>
      ) : (
        <El.Menuitem>
          {(item && item.hasCheckbox) ||
          (item && item.hasCheckbox === 'true') ? (
            <Checkbox
              flex
              gap={gap}
              label={
                <El.Flex
                  flex
                  width="100%"
                  gap={gap}
                  items="center start"
                  content="start"
                >
                  {item && item.image ? (
                    <El.Image
                      src={item.image}
                      width="40px"
                      height="40px"
                      fit="fill"
                    />
                  ) : null}
                  <El.BaseElement>
                    {(item && item.children) || null}
                  </El.BaseElement>
                </El.Flex>
              }
              {...otherProps}
            />
          ) : (
            <>
              {item && item.image ? (
                <El.Image
                  src={item.image}
                  width="40px"
                  height="40px"
                  fit="fill"
                />
              ) : null}
              <El.BaseElement>{(item && item.children) || null}</El.BaseElement>
            </>
          )}
        </El.Menuitem>
      )}
    </>
  );
};

export default OptionList;
