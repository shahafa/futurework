export const flexboxProps = props => `
  display: flex;
  ${props.directionRow && 'flex-direction: row'};
  ${props.directionRowReverse && 'flex-direction: row-reverse'};
  ${props.directionColumn && 'flex-direction: column'};
  ${props.directionColumnReverse && 'flex-direction: column-reverse'};
  ${props.justifyContentStart && 'justify-content: flex-start'};
  ${props.justifyContentEnd && 'justify-content: flex-end'};
  ${props.justifyContentCenter && 'justify-content: center'};
  ${props.justifyContentSpaceBetween && 'justify-content: space-between'};
  ${props.justifyContentSpaceAround && 'justify-content: space-around'};
  ${props.alignItemsStart && 'align-items: flex-start'};
  ${props.alignItemsEnd && 'align-items: flex-end'};
  ${props.alignItemsCenter && 'align-items: center'};
  ${props.alignItemsBaseline && 'align-items: baseline'};
  ${props.alignItemsStretch && 'align-items: stretch'};
`;

export const marginProps = props => `
  ${props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${props.marginTop && `margin-top: ${props.marginTop}`};
  ${props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${props.marginRight && `margin-right: ${props.marginRight}`};
  ${props.margin && `margin: ${props.margin}`};
  ${props.marginVertical && `
    margin-top: ${props.marginVertical};
    margin-bottom: ${props.marginVertical};
  `};
  ${props.marginHorizontal && `
    margin-left: ${props.marginHorizontal};
    margin-right: ${props.marginHorizontal};
  `};
`;

export const paddingProps = props => `
  ${props.paddingBottom && `padding-bottom: ${props.paddingBottom}`};
  ${props.paddingTop && `padding-top: ${props.paddingTop}`};
  ${props.paddingLeft && `padding-left: ${props.paddingLeft}`};
  ${props.paddingRight && `padding-right: ${props.paddingRight}`};
  ${props.padding && `padding: ${props.padding}`};
  ${props.paddingVertical && `
    padding-top: ${props.paddingVertical};
    padding-bottom: ${props.paddingVertical};
  `};
  ${props.paddingHorizontal && `
    padding-left: ${props.paddingHorizontal};
    padding-right: ${props.paddingHorizontal};
  `};  
`;

export const textProps = props => `
  ${props.size && `font-size: ${props.size}`};
  ${props.weight && `font-weight: ${props.weight}`};
  ${props.align && `text-align: ${props.align}`};
  ${props.color && `color: ${props.color}`};
`;

export const sizeProps = props => `
  ${props.width && `width: ${props.width}`};
  ${props.height && `height: ${props.height}`}; 
`;

export const spacingProps = props => `
  ${props.vertical && `
    height: ${props.vertical};
  `};
  ${props.horizontal && `
    width: ${props.horizontal};
  `};
`;
