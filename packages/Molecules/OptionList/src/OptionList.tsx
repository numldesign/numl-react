import React, { useEffect, useRef } from 'react';
import { El } from '@numl-react/core';
import Checkbox from '../../../Atoms/Checkbox/src/Checkbox';

// function OptionList(allProps: any) {
//   const ref: any = useRef();
//   const {
//     selected,
//     options,
//     sections,
//     onChange,
//     multiSelect,
//     contentWrapperProps,
//     checkboxWrapperProps,
//     renderHeader,
//     renderContent,
//     ...otherProps
//   } = allProps;

//   useEffect(() => {
//     if (ref && ref.current && onChange) {
//       ref.current.addEventListener('input', (evt: any) => onChange(evt.detail));
//     }
//   }, []);

//   return (
//     <El.Block {...otherProps}>
//       {renderHeader}
//       <El.Listbox
//         ref={ref}
//         border="n"
//         padding="0"
//         value={selected}
//         multiple={multiSelect || undefined}
//       >
//         {options && options.length
//           ? options.map((item: any, index: any) => {
//               const checked =
//                 multiSelect && selected && selected.includes(String(index));
//               return (
//                 <El.Option value={index} {...contentWrapperProps}>
//                   {multiSelect ? (
//                     <El.Block {...checkboxWrapperProps}>
//                       <El.Checkbox checked={checked} />
//                     </El.Block>
//                   ) : null}
//                   {renderContent && renderContent({ item, index })}
//                 </El.Option>
//               );
//             })
//           : null}

//         {sections && sections.length
//           ? sections.map(
//               (
//                 option: { renderHeader: any; options: string | any[] },
//                 sectionIndex: any
//               ) => {
//                 const sectionHeader = option.renderHeader
//                   ? option.renderHeader
//                   : null;
//                 const optionList: any =
//                   option.options && option.options.length ? option.options : [];
//                 return (
//                   <El.Block>
//                     {sectionHeader}
//                     {optionList.map((item: { index: any }) => {
//                       const { index } = item;
//                       const checked =
//                         multiSelect &&
//                         selected &&
//                         selected.includes(String(index));
//                       return (
//                         <El.Option
//                           key={index}
//                           value={index}
//                           {...contentWrapperProps}
//                         >
//                           {multiSelect ? (
//                             <El.Block {...checkboxWrapperProps}>
//                               <El.Checkbox checked={checked} />
//                             </El.Block>
//                           ) : null}
//                           {renderContent &&
//                             renderContent({ item, index, sectionIndex })}
//                         </El.Option>
//                       );
//                     })}
//                   </El.Block>
//                 );
//               }
//             )
//           : null}
//       </El.Listbox>
//     </El.Block>
//   );
// }

const OptionList = (props: any) => {
  const { items, fill = 'bg', ...otherProps } = props;
  return (
    <El.Menu fill={fill} {...otherProps}>
      {items && typeof items === 'object' ? (
        <>
          {items.map((eachItem: any) => (
            <OptionList.Item item={eachItem} />
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
  const { item, ...otherProps } = props;
  return (
    <>
      {item && item.heading ? (
        <OptionList.Heading>{item.heading}</OptionList.Heading>
      ) : (
        <El.Menuitem>
          {(item && item.hasCheckbox) ||
          (item && item.hasCheckbox === 'true') ? (
            <Checkbox
              label={
                <El.Flex flex gap items="center start" content=" space-between">
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
