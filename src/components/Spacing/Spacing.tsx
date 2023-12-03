import { SpacingStyleCss } from 'css';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { ldsTheme } from 'theme';
import { SpacingSizeType, SpacingType } from 'types';

export type SpacingProps = {
  overrideCss?: CSSProperties;
  size?: SpacingSizeType;
  spacingType?: SpacingType;
  useRem?: boolean;
};

function Spacing({ overrideCss, size = 'spacing_d', spacingType = 'horizontal', useRem = false }: SpacingProps) {
  const spacingSize = useRem ? (`spacing_${size.charAt(size.length - 1).toUpperCase()}` as SpacingSizeType) : size;
  return (
    <ThemeProvider theme={ldsTheme}>
      <StyledSpacing size={spacingSize} style={overrideCss} $spacingType={spacingType} />
    </ThemeProvider>
  );
}

const StyledSpacing = styled.div<{ size: string; $spacingType: SpacingType }>`
  ${({ $spacingType }) => {
    return { vertical: SpacingStyleCss.VerticalTypeCss, horizontal: SpacingStyleCss.HorizontalTypeCss }[$spacingType];
  }};
`;

export default Spacing;
