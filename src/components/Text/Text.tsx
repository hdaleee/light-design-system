import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { TextStyleThemeType, spacing } from '../../types';

import { headerBold, headerNormal, headerLighter, bodyBold, bodyNormal, bodyLighter } from './TextStyleCss';

export type TextProps = {
  content: string;
  styleTheme?: TextStyleThemeType;
  width?: 'auto' | 'fit-content';
  overrideCss?: CSSProperties;
  useRem?: boolean;
};

/**
 * @param content string
 * @param styleTheme 'headerBold' | 'headerNormal' | 'headerLighter' | 'bodyBold' | 'bodyNormal' | 'bodyLighter'
 * @param width 'auto' | 'fit-content'
 * @param overrideCss css object type
 * @param useRem default value is false, it means using 'px' */
function Text({ content, styleTheme = 'bodyNormal', width = 'auto', overrideCss, useRem = true }: TextProps) {
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
