import { TextStyleCss } from 'css';
import styled, { CSSProperties, ThemeProvider } from 'styled-components';
import { ldsTheme } from 'theme';
import { TextStyleThemeType } from 'types';

export type TextProps = {
  content: string;
  overrideCss?: CSSProperties;
  styleTheme?: TextStyleThemeType;
  useRem?: boolean;
};

function Text({ content, overrideCss, styleTheme = 'bodyNormal', useRem = true }: TextProps) {
  return (
    <ThemeProvider theme={ldsTheme}>
      <StyledText styleTheme={styleTheme} useRem={useRem} style={overrideCss}>
        {content}
      </StyledText>
    </ThemeProvider>
  );
}

const StyledText = styled.div<{ styleTheme: TextStyleThemeType; useRem: boolean }>`
  ${({ styleTheme }) => {
    return {
      headerBold: TextStyleCss.HeaderBold,
      headerNormal: TextStyleCss.headerNormal,
      headerLighter: TextStyleCss.headerLighter,
      bodyBold: TextStyleCss.bodyBold,
      bodyNormal: TextStyleCss.bodyNormal,
      bodyLighter: TextStyleCss.bodyLighter,
    }[styleTheme];
  }}
`;

export default Text;
