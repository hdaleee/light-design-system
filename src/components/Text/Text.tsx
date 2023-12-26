import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { TextStyleThemeType, spacing } from '../../types';

import { headerBold, headerNormal, headerLighter, bodyBold, bodyNormal, bodyLighter } from './TextStyleCss';

export type TextProps = {
  content: string;
  overrideCss?: CSSProperties;
  styleTheme?: TextStyleThemeType;
  width?: 'auto' | 'fit-content';
  useRem?: boolean;
};

function Text({ content, overrideCss, styleTheme = 'bodyNormal', width = 'auto', useRem = true }: TextProps) {
  return (
    <ThemeProvider theme={spacing}>
      <StyledText $styleTheme={styleTheme} $useRem={useRem} $width={width} style={overrideCss}>
        {content}
      </StyledText>
    </ThemeProvider>
  );
}

const StyledText = styled.div<{ $styleTheme: TextStyleThemeType; $useRem: boolean; $width: 'auto' | 'fit-content' }>`
  width: ${({ $width }) => $width};

  ${({ $styleTheme }) => {
    return {
      headerBold,
      headerNormal,
      headerLighter,
      bodyBold,
      bodyNormal,
      bodyLighter,
    }[$styleTheme];
  }}
`;

export default Text;
