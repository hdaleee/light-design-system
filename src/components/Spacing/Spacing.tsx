import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { SpacingSizeType, SpacingType, spacing } from '../../types';

import { HorizontalTypeCss, VerticalTypeCss } from './SpacingStyleCss';

export type SpacingProps = {
  size?: SpacingSizeType;
  spacingType?: SpacingType;
  overrideCss?: CSSProperties;
  useRem?: boolean;
};

/**
 * @param size spacing_${a to Z}
 * @param spacingType 'vertical' | 'horizontal'
 * @param overrideCss css object type
 * @param useRem default value is false, it means using 'px' */
function Spacing({ size = 'spacing_d', spacingType = 'horizontal', overrideCss, useRem = false }: SpacingProps) {
  const spacingSize = useRem ? (`spacing_${size.charAt(size.length - 1).toUpperCase()}` as SpacingSizeType) : size;
  return (
    <ThemeProvider theme={spacing}>
      <StyledSpacing size={spacingSize} style={overrideCss} $spacingType={spacingType} />
    </ThemeProvider>
  );
}

const StyledSpacing = styled.div<{ size: SpacingSizeType; $spacingType: SpacingType }>`
  ${({ $spacingType }) => {
    return { vertical: VerticalTypeCss, horizontal: HorizontalTypeCss }[$spacingType];
  }};
`;

export default Spacing;
