import { css } from 'styled-components';

export const HeaderBold = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem, theme }) => ($useRem ? theme.spacing.spacing_H : theme.spacing.spacing_h)};
  font-weight: bold;
`;

export const headerNormal = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? '2rem' : '32px')};
  font-weight: normal;
`;

export const headerLighter = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? '2rem' : '32px')};
  font-weight: lighter;
`;

export const bodyBold = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? '1rem' : '16px')};
  font-weight: bold;
`;

export const bodyNormal = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? '1rem' : '16px')};
  font-weight: normal;
`;

export const bodyLighter = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? '1rem' : '16px')};
  font-weight: lighter;
`;
