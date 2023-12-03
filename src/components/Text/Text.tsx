import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { TextStyleThemeType, spacing } from 'types';

import { headerBold, headerNormal, headerLighter, bodyBold, bodyNormal, bodyLighter } from './TextStyleCss';

export type TextProps = {
  content: string;
  overrideCss?: CSSProperties;
  styleTheme?: TextStyleThemeType;
  useRem?: boolean;
};

function Text({ content, overrideCss, styleTheme = 'bodyNormal', useRem = true }: TextProps) {
  return (
    <ThemeProvider theme={spacing}>
      <StyledText $styleTheme={styleTheme} $useRem={useRem} style={overrideCss}>
        {content}
      </StyledText>
    </ThemeProvider>
  );
}

const StyledText = styled.div<{ $styleTheme: TextStyleThemeType; $useRem: boolean }>`
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
