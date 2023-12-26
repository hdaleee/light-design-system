import { css } from 'styled-components';
import { spacing } from '../../types';

export const headerBold = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? spacing.spacing_H : spacing.spacing_h)};
  font-weight: bold;
`;

export const headerNormal = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? spacing.spacing_H : spacing.spacing_h)};
  font-weight: normal;
`;

export const headerLighter = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? spacing.spacing_H : spacing.spacing_h)};
  font-weight: lighter;
`;

export const bodyBold = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? spacing.spacing_D : spacing.spacing_d)};
  font-weight: bold;
`;

export const bodyNormal = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? spacing.spacing_D : spacing.spacing_d)};
  font-weight: normal;
`;

export const bodyLighter = css<{ $useRem: boolean }>`
  font-size: ${({ $useRem }) => ($useRem ? spacing.spacing_D : spacing.spacing_d)};
  font-weight: lighter;
`;
