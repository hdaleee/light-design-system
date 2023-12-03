import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { SpacingSizeType, SpacingType, spacing } from 'types';

import { HorizontalTypeCss, VerticalTypeCss } from './SpacingStyleCss';

export type SpacingProps = {
  overrideCss?: CSSProperties;
  size?: SpacingSizeType;
  spacingType?: SpacingType;
  useRem?: boolean;
};

function Spacing({ overrideCss, size = 'spacing_d', spacingType = 'horizontal', useRem = false }: SpacingProps) {
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
