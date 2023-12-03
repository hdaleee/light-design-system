import { css } from 'styled-components';

export const HorizontalTypeCss = css<{ size: string }>`
  width: ${({ size, theme }) => theme.spacing[size]};
`;

export const VerticalTypeCss = css<{ size: string }>`
  height: ${({ size, theme }) => theme.spacing[size]};
`;
