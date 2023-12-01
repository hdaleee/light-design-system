import { CSSProperties } from 'styled-components';
import { TextStyleThemeType } from 'types';
export type TextProps = {
    content: string;
    overrideCss?: CSSProperties;
    styleTheme?: TextStyleThemeType;
    useRem?: boolean;
};
declare function Text({ content, overrideCss, styleTheme, useRem }: TextProps): import("react/jsx-runtime").JSX.Element;
export default Text;
